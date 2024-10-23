"use client";

import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import Title from "../common/Title";
import Separator from "./Separator";
import { useUserContext } from "@/context/user-provider";
import { useState } from "react";
import { Form } from "../form";

type UserData = z.infer<typeof loginSchema>;

const Login = () => {
  const router = useRouter();
  const { loginValidation } = useUserContext();
  const [showMsg, setShowMsg] = useState<boolean>();
  const createUserForm = useForm<UserData>({
    resolver: zodResolver(loginSchema),
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = createUserForm;

  const resetForm = () => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  };

  const handleClick = async (data: UserData) => {
    const checkedData = await loginValidation(data.email);
    if (checkedData.checkedUser.length !== 0) {
      localStorage.setItem(
        "loggedUser",
        JSON.stringify(checkedData.checkedUser[0])
      );
      resetForm();
      router.push("/dashboard");
    } else {
      setShowMsg(true);
    }
  };

  return (
    <FormProvider {...createUserForm}>
      <form className="login-form" onSubmit={handleSubmit(handleClick)}>
        <Title
          title="Efetuar login"
          subtitle="Entre e ouça as melhores músicas do momento."
        />
        <section className="container-inputs">
          <Form.Field className="container-field">
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Input
              className={`${errors.password ? "error-border" : ""}`}
              type="text"
              name="email"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field className="container-field">
            <div className="container-pwd">
              <Form.Label htmlFor="password">Senha</Form.Label>
              <Link href="/redefine">Esqueceu a senha?</Link>
            </div>
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
            Entrar
          </Form.Button>
          <Separator />
          <Form.Button className="google-btn" type="submit">
            <p>Entrar com </p>
            <Image
              className="google-icon"
              src={google}
              alt="Google icon for login"
            />
          </Form.Button>
          {showMsg && (
            <span className="email-error-msg">
              E-mail não cadastrado! Por favor registre-se.
            </span>
          )}
        </section>
        <Link className="register-link" href="/sign-up">
          Novo por aqui? Cadastre-se aqui.
        </Link>
      </form>
    </FormProvider>
  );
};

export default Login;
