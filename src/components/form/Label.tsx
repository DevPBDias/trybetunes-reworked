import { LabelHTMLAttributes } from "react";

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label className="container-field" {...props} />;
};

export default Label;
