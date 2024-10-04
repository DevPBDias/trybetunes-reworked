"use client";

import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <form className="login-form">
      <section className="container-title">
        <h1 className="login-title">Efetuar login</h1>
        <p className="login-subtitle">
          Entre e ouça as melhores músicas do momento.
        </p>
      </section>
      <section className="container-inputs">
        <fieldset className="container-field">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </fieldset>
        <fieldset className="container-field">
          <div className="container-pwd">
            <label htmlFor="pwd">Senha</label>
            <Link href="/redefine">Esqueceu a senha?</Link>
          </div>
          <input type="text" name="pwd" id="pwd" />
        </fieldset>
      </section>
      <section className="container-btns">
        <button
          className="main-btn"
          type="submit"
          onClick={() => router.push("/dashboard")}
        >
          Entrar
        </button>
        <div className="container-separator">
          <div></div>
          <p>ou</p>
          <div></div>
        </div>
        <button
          className="google-btn"
          type="submit"
          onClick={() => router.push("/dashboard")}
        >
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
