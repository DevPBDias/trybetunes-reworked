import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      className={`${errors.search ? "error-border" : ""}`}
      id={props.name}
      {...register(props.name)}
      {...props}
    />
  );
}
