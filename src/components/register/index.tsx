import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";
import Title from "../common/Title";

const Register = () => {
  return (
    <form className="register-form">
      <Title
        title="Efetuar cadastro"
        subtitle="Registre-se para desfrutar das melhores músicas do momento."
      />
      <section className="container-inputs">
        <div className="container-user">
          <fieldset className="container-field">
            <label htmlFor="firstName">Nome</label>
            <input type="text" name="firstName" id="firstName" />
          </fieldset>
          <fieldset className="container-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" name="lastName" id="lastName" />
          </fieldset>
        </div>
        <fieldset className="container-field">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />
        </fieldset>
        <fieldset className="container-field">
          <label htmlFor="pwd">Senha</label>
          <input type="text" name="pwd" id="pwd" />
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
