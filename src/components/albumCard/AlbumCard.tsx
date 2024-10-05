"use client";

import Image from "next/image";
import albumImage from "@/assets/images/album.png";
import "./styles.scss";
import { useRouter } from "next/navigation";

const AlbumCard = () => {
  const route = useRouter();

  return (
    <section
      className="container-album-card"
      onClick={() => route.push("album/1")}
    >
      <main className="container-album-image">
        <Image
          className="album-image"
          src={albumImage}
          alt="album image"
          quality={100}
          priority
          placeholder="blur"
        />
      </main>
      <div className="text-album-content">
        <p>Album name</p>
        <span>Artist name</span>
      </div>
    </section>
  );
};

export default AlbumCard;
