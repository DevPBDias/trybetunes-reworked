"use client";

import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import Title from "../common/Title";
import Separator from "./Separator";

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const resetForm = () => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  };

  const handleClick = (data: FormData) => {
    resetForm();
    router.push("/dashboard");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(handleClick)}>
      <Title
        title="Efetuar login"
        subtitle="Entre e ouça as melhores músicas do momento."
      />
      <section className="container-inputs">
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
          <div className="container-pwd">
            <label htmlFor="pwd">Senha</label>
            <Link href="/redefine">Esqueceu a senha?</Link>
          </div>
          <input
            className={`${errors.password ? "error-border" : ""}`}
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
          Entrar
        </button>
        <Separator />
        <button className="google-btn" type="button">
          <p>Entrar com </p>
          <Image
            className="google-icon"
            src={google}
            alt="Google icon for login"
          />
        </button>
      </section>
      <Link className="register-link" href="/sign-up">
        Novo por aqui? Cadastre-se aqui.
      </Link>
    </form>
  );
};

export default Login;
