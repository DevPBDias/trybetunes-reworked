import { HTMLAttributes } from "react";

interface FieldProps extends HTMLAttributes<HTMLFieldSetElement> {}

const Field = (props: FieldProps) => {
  return <fieldset {...props} />;
};

export default Field;
