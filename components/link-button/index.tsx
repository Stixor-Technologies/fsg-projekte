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
        return "sm:max-w-[379px] w-full h-[50px] lg:h-[76px]";
      case "md":
        return "sm:max-w-[485px] w-full h-[50px] lg:h-[76px]";
      default:
        return "";
    }
  };

  const allClassNames = `  items-center bg-brown justify-center gap-3 bg-opacity-80 font-proxima-semibold  text-base uppercase tracking-wide duration-300 hover:rounded-[5px] hover:bg-opacity-100 hover:text-[17px] hover:tracking-widest lg:text-lg lg:leading-[23px] lg:hover:text-[19px] disabled:opacity-50  ${styles} ${getSizeClass()}`;

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
