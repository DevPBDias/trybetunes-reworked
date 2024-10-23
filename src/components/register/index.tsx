"use client";

import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";
import Title from "../common/Title";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas";
import { useUserContext } from "@/context/user-provider";
import { useState } from "react";
import { Form } from "../form";

type RegisterData = z.infer<typeof registerSchema>;

const Register = () => {
  const router = useRouter();
  const { addStorage, checkEmailInStorage } = useUserContext();
  const [showMsg, setShowMsg] = useState<boolean>();

  const registerForm = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = registerForm;

  const resetForm = () => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "", firstName: "", lastName: "" });
    }
  };

  const handleClick = async (data: RegisterData) => {
    if (await checkEmailInStorage(data.email)) {
      setShowMsg(true);
    } else {
      addStorage("trybetunes-users", data);
      resetForm();
      router.push("/");
    }
  };

  return (
    <FormProvider {...registerForm}>
      <form className="register-form" onSubmit={handleSubmit(handleClick)}>
        <Title
          title="Efetuar cadastro"
          subtitle="Registre-se para desfrutar das melhores músicas do momento."
        />
        <section className="container-inputs">
          <div className="container-user">
            <Form.Field className="container-field">
              <Form.Label htmlFor="firstName">Nome</Form.Label>
              <Form.Input
                className={`${errors.firstName ? "error-border" : ""}`}
                type="text"
                name="firstName"
              />
              <Form.ErrorMessage field="firstName" />
            </Form.Field>
            <Form.Field className="container-field">
              <Form.Label htmlFor="lastName">Sobrenome</Form.Label>
              <Form.Input
                className={`${errors.lastName ? "error-border" : ""}`}
                type="text"
                name="lastName"
              />
              <Form.ErrorMessage field="lastName" />
            </Form.Field>
          </div>
          <Form.Field className="container-field">
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Input
              className={`${errors.email ? "error-border" : ""}`}
              type="text"
              name="email"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field className="container-field">
            <Form.Label htmlFor="password">Senha</Form.Label>
            <Form.Input
              className={`${errors.password ? "error-border" : ""}`}
              type="text"
              name="password"
            />
            <Form.ErrorMessage field="password" />
          </Form.Field>
        </section>
        <section className="container-btns">
          <Form.Button className="main-btn" type="submit">
            Cadastrar
          </Form.Button>
          <Form.Button className="google-btn" type="submit">
            <p>Cadastrar com </p>
            <Image
              className="google-icon"
              src={google}
              alt="Google icon for login"
            />
          </Form.Button>
          {showMsg && (
            <span className="email-error-msg">E-mail já foi usado!</span>
          )}
        </section>
        <Link className="redirect-link" href="/">
          Já tem cadastro? Efetue o login por aqui.
        </Link>
      </form>
    </FormProvider>
  );
};

export default Register;
