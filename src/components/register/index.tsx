"use client";

import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";
import Title from "../common/Title";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas";

type FormData = z.infer<typeof registerSchema>;

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const resetForm = () => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "", firstName: "", lastName: "" });
    }
  };

  const handleClick = (data: FormData) => {
    resetForm();
    router.push("/");
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(handleClick)}>
      <Title
        title="Efetuar cadastro"
        subtitle="Registre-se para desfrutar das melhores músicas do momento."
      />
      <section className="container-inputs">
        <div className="container-user">
          <fieldset className="container-field">
            <label htmlFor="firstName">Nome</label>
            <input
              className={`${errors.email ? "error-border" : ""}`}
              type="text"
              {...register("firstName")}
              id="firstName"
            />
            {errors.firstName && (
              <span className="error-msg">{errors.firstName.message}</span>
            )}
          </fieldset>
          <fieldset className="container-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              className={`${errors.email ? "error-border" : ""}`}
              type="text"
              {...register("lastName")}
              id="lastName"
            />
            {errors.lastName && (
              <span className="error-msg">{errors.lastName.message}</span>
            )}
          </fieldset>
        </div>
        <fieldset className="container-field">
          <label htmlFor="email">E-mail</label>
          <input
            className={`${errors.email ? "error-border" : ""}`}
            type="text"
            {...register("email")}
            id="email"
          />
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </fieldset>
        <fieldset className="container-field">
          <label htmlFor="pwd">Senha</label>
          <input
            className={`${errors.email ? "error-border" : ""}`}
            type="password"
            {...register("password")}
            id="pwd"
          />
          {errors.password && (
            <span className="error-msg">{errors.password.message}</span>
          )}
        </fieldset>
      </section>
      <section className="container-btns">
        <button className="main-btn" type="submit">
          Cadastrar
        </button>
        <button className="google-btn" type="submit">
          <p>Cadastrar com </p>
          <Image
            className="google-icon"
            src={google}
            alt="Google icon for register"
          />
        </button>
      </section>
      <Link className="redirect-link" href="/">
        Já tem cadastro? Efetue o login por aqui.
      </Link>
    </form>
  );
};

export default Register;
