import Register from "@/components/register";
import Image from "next/image";
import heroRegister from "../../assets/images/register-hero.png";

export default function SignUp() {
  return (
    <main className="container-hero">
      <picture className="container-hero-image">
        <Image
          className="hero"
          src={heroRegister}
          alt="Hero image for register"
          fill
          priority
        />
      </picture>
      <Register />
    </main>
  );
}
