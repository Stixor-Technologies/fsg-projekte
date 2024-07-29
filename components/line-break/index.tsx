import React from "react";

const TextWithLineBreaks = ({ text }: { text: string }) => {
  return text.split("|").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br className="hidden xl:block" />
    </React.Fragment>
  ));
};

export default TextWithLineBreaks;
