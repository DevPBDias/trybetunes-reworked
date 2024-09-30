import Link from "next/link";
import "./styles.scss";
import google from "../../assets/icons/google-icon.png";
import Image from "next/image";

const Login = () => {
  return (
    <form>
      <section>
        <h1>Efetuar login</h1>
        <p>Entre e ouça as melhores músicas do momento.</p>
      </section>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="email">E-mail</label>
          <Link href="/redefine">Esqueceu a senha?</Link>
        </div>
        <input type="text" name="email" id="email" />
      </fieldset>
      <section>
        <button type="submit">Entrar</button>
        <div>
          <div></div>
          <p>ou</p>
          <div></div>
        </div>
        <button type="submit">
          <p>Entrar com </p>
          <Image src={google} alt="Google icon for login" />
        </button>
      </section>
      <Link href="/register">Novo por aqui? Cadastre-se aqui.</Link>
    </form>
  );
};

export default Login;
