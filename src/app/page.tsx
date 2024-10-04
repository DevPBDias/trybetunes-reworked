import Login from "@/components/login";
import Image from "next/image";
import heroLogin from "../assets/images/login-hero.png";

export default function Home() {
  return (
    <main className="container-hero">
      <Image
        src={heroLogin}
        alt="Hero image for login"
        style={{ objectFit: "cover" }}
        fill
        quality={100}
        priority
        placeholder="blur"
      />
      <Login />
    </main>
  );
}
