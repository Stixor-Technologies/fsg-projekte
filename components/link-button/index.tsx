import Link, { LinkProps } from "next/link";
import React, { FC } from "react";
import Spinner from "../spinner/spinner";

type BaseProps = {
  text: string;
  styles?: string;
  variant: "sm" | "md";
  loading?: boolean;
};

type ActionProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as: "button";
        loading?: boolean;
      })
    | (LinkProps & {
        as: "link";
      })
  );

const LinkButton: FC<ActionProps> = ({ variant, styles, text, ...props }) => {
  const getSizeClass = () => {
    switch (variant) {
      case "sm":
        return "sm:max-w-[23.6875rem] w-full h-[3.125rem] lg:h-[4.75rem]";
      case "md":
        return "sm:max-w-[30.3125rem] w-full h-[3.125rem] lg:h-[4.75rem]";
      default:
        return "";
    }
  };

  const allClassNames = `  items-center bg-brown justify-center gap-3 font-proxima-semibold  text-sm uppercase tracking-wide duration-300 hover:rounded-[.3125rem] hover:bg-opacity-100 hover:text-[.9375rem]  hover:tracking-[0.5px] sm:hover:tracking-widest lg:text-lg lg:leading-[1.4375rem] lg:hover:text-[1.1875rem] disabled:opacity-50  ${styles} ${getSizeClass()}`;

  if (props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props;
    return (
      <Link className={`${allClassNames} inline-flex`} {...rest}>
        {text}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, loading, ...rest } = props;
  return (
    <button className={`${allClassNames}  relative flex `} {...rest}>
      <span className="text-white">{text}</span>
      {loading && (
        <div>
          <Spinner size="size-5" color="text-white" />
        </div>
      )}
    </button>
  );
};

export default LinkButton;
