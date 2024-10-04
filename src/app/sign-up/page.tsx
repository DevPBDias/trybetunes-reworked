import Register from "@/components/register";
import Image from "next/image";
import heroRegister from "../../assets/images/register-hero.png";

export default function SignUp() {
  return (
    <main className="container-hero">
      <Image
        src={heroRegister}
        alt="Hero image for register"
        style={{ objectFit: "cover" }}
        fill
        quality={100}
        priority
        placeholder="blur"
      />
      <Register />
    </main>
  );
}
