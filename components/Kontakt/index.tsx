"use client";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, FormikHelpers } from "formik";
import ArrowDown from "@/public/assets/arrow.svg";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import LinkButton from "../link-button";
import { aktuelleprojekte } from "@/app/utils/data";

interface InputType {
  type?: string;
  name: string;
  placeholder: string;
  touched: boolean | undefined;
  error: string | undefined;
}

interface DropwDownType {
  name: string;
  options: string[];
  placeholder: string;
}

const Kontakt = () => {
  const [isLoading, setLoading] = useState(false);
  const [projectOptions, setProjectOptions] = useState<string[]>([]);

  type FormValues = {
    vorName: string;
    nachName: string;
    email: string;
    ruckrufnummer: string;
    projekt: string;
    discovery: string;
    nachricht: string;
    terms: boolean;
  };

  const initialValues = {
    vorName: "",
    nachName: "",
    email: "",
    ruckrufnummer: "",
    projekt: "",
    discovery: "",
    nachricht: "",
    terms: false,
  };

  const validationSchema = Yup.object({
    vorName: Yup.string()
      .trim()
      .matches(
        /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        "Ungültiger Vorname: Es sind nur alphabetische Zeichen und ein einzelnes Leerzeichen zwischen den Namen zulässig",
      )
      .required("Erforderlich"),

    nachName: Yup.string()
      .trim()
      .matches(
        /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        "Ungültiger name: Es sind nur alphabetische Zeichen und ein einzelnes Leerzeichen zwischen den Namen zulässig",
      )
      .required("Erforderlich"),

    email: Yup.string()
      .email("Ungültige E-Mail-Adresse")
      .required("Erforderlich"),

    nachricht: Yup.string()
      .min(10, "Die Nachricht sollte mindestens 10 Zeichen lang sein")
      .max(300, "Die Nachricht sollte höchstens 300 Zeichen lang sein."),

    terms: Yup.boolean()
      .oneOf(
        [true],
        "Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen",
      )
      .required("Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen"),
  });

  useEffect(() => {
    const projectIds = aktuelleprojekte.map((project) => project.id);
    setProjectOptions(projectIds);
  }, []);

  const onSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    setLoading(true);
    try {
      const emailTemplate = `<div>
        <p>New inquiry from: ${values?.vorName} ${values?.nachName} - ${values?.email} </p>
        ${values?.ruckrufnummer && `<p>Rückrufnummer: ${values?.ruckrufnummer}</p>`}
        ${values?.projekt && `<p>Projekt: ${values?.projekt}</p>`}
        ${values?.discovery && `<p>Wie haben Sie von uns gehört?: ${values?.discovery}</p>`}
        ${values?.nachricht && ` <p>Message: ${values?.nachricht}</p>`}     
 </div>`;

      const res = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: `${values.vorName} ${values?.nachName}`,
          email: values.email,
          message: values.nachricht,
          htmlContent: emailTemplate,
        }),
      });
      const data = await res.json();
      if (data === 202) {
        toast.success("Email has been sent", {
          position: "top-right",
        });

        setTimeout(() => {
          formikHelpers.resetForm();
        }, 1000);
      } else {
        toast.error("Failed to send email", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputTemplate = ({
    type = "text",
    name,
    placeholder,
    touched,
    error,
  }: InputType) => (
    <div className="  w-full ">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="h-[2.438rem] w-full border-b border-medium-blue bg-transparent text-[0.938rem] leading-[2.125rem] text-medium-blue outline-none placeholder:text-medium-blue"
      />
      {touched && error && (
        <p className="mt-1 text-xs italic text-red-600">{error}</p>
      )}
    </div>
  );

  const dropDownTemplate = ({ name, options, placeholder }: DropwDownType) => (
    <div className="relative h-[2.438rem] w-full border-b border-medium-blue">
      <Field
        as="select"
        name={name}
        className={`w-full appearance-none bg-transparent text-[0.938rem] capitalize leading-[2.125rem] text-medium-blue outline-none placeholder:text-medium-blue`}
      >
        <option value="" disabled>
          {`${placeholder}`}
        </option>
        {options?.map((option, index) => {
          return (
            <option key={index} value={`${option?.toLowerCase()}`}>
              {option}
            </option>
          );
        })}
      </Field>

      <div className="pointer-events-none absolute right-0 top-1/2 -mt-1 flex -translate-y-1/2 items-center">
        <Image src={ArrowDown} alt="dropdown-arrow" />
      </div>
    </div>
  );

  return (
    <section
      id="kontact"
      className=" bg-light-yellow py-[3.125rem] lg:pb-[3.625rem] lg:pt-[6.25rem] 4xl:h-[58.313rem]"
    >
      <div className="mx-auto max-w-[64.188rem] px-5 md:px-10 xl:px-0">
        <div className=" mb-[1.938rem] text-center lg:mb-[3.875re,]">
          <p className="mt-[2.188rem] h-[3.4375rem] font-gt-display-light text-xl text-medium-blue lg:mt-[4.375rem] lg:text-[3.4375rem] lg:leading-[2.375rem]">
            Wir beraten Sie gern
          </p>
          <h2 className="mt-[0.8125rem] font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.875rem] xl:mb-9 2xl:mb-[5.0187rem] 4xl:h-5">
            TEL +49 (0)40 561 289 40
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="text-secondary text-lg">
              <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 sm:gap-[3.406rem]">
                <div className="space-y-[0.9375rem]">
                  {inputTemplate({
                    name: "vorName",
                    placeholder: "Vorname*",
                    touched: touched.vorName,
                    error: errors.vorName,
                  })}

                  {inputTemplate({
                    name: "nachName",
                    placeholder: "Nachname*",
                    touched: touched.nachName,
                    error: errors.nachName,
                  })}

                  {inputTemplate({
                    name: "email",
                    placeholder: "E-Mail*",
                    touched: touched.email,
                    error: errors.email,
                  })}
                </div>
                <div className="flex flex-col justify-between gap-[0.938rem]">
                  {dropDownTemplate({
                    name: "ruckrufnummer",
                    placeholder: "Rückrufnummer",
                    options: ["One", "Two", "Three", "Four", "Five"],
                  })}
                  {dropDownTemplate({
                    name: "projekt",
                    placeholder: "Projekt",
                    options: projectOptions,
                  })}
                  {inputTemplate({
                    name: "discovery",
                    placeholder: "Wie haben Sie von uns gehört?",
                    touched: touched.discovery,
                    error: errors.discovery,
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-[2.2813rem]">
                <div className="mt-[1.875rem] w-full">
                  <Field
                    as="textarea"
                    name="nachricht"
                    placeholder="Nachricht"
                    className="h-[9.25rem] w-full resize-none  border-b border-medium-blue bg-transparent text-[0.938rem] leading-none text-medium-blue outline-none placeholder:text-medium-blue"
                  />
                  {touched.nachricht && errors.nachricht && (
                    <p className="text-xs italic text-red-600">
                      {errors.nachricht as string}
                    </p>
                  )}
                </div>
                <LinkButton
                  as={"button"}
                  variant="md"
                  text="Absenden"
                  styles="mt-8 sm:mt-0 bg-opacity-80"
                  loading={isLoading}
                  disabled={isLoading}
                />
                <div className="flex items-center gap-[1.125rem] sm:-mt-3">
                  <Field
                    id={"terms"}
                    type="checkbox"
                    name={"terms"}
                    className=" peer relative size-[1.313rem]
                                  shrink-0 appearance-none rounded-[0.313rem] border border-medium-blue bg-transparent accent-medium-blue checked:appearance-auto"
                  />

                  <label
                    htmlFor={"terms"}
                    className="text-[0.938rem] leading-none text-medium-blue"
                  >
                    Ich stimme den{" "}
                    <Link href={"/"} className=" text-brown underline">
                      Datenschutzbedingungen
                    </Link>{" "}
                    zu*
                  </label>
                </div>

                {touched.terms && errors.terms && (
                  <p className="mt-1 text-xs italic text-red-600">
                    {errors.terms as string}
                  </p>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Kontakt;
