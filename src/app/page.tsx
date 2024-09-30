import Login from "@/components/login";
import Image from "next/image";
import heroLogin from "../assets/images/login-hero.png";

export default function Home() {
  return (
    <main>
      <picture>
        <Image src={heroLogin} alt="Hero image for login" />
      </picture>
      <Login />
    </main>
  );
}
