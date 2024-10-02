import Login from "@/components/login";
import Image from "next/image";
import heroLogin from "../assets/images/login-hero.png";

export default function Home() {
  return (
    <main className="container-hero-login">
      <picture className="container-hero-image">
        <Image
          className="hero"
          src={heroLogin}
          alt="Hero image for login"
          fill
          priority
        />
      </picture>
      <Login />
    </main>
  );
}
