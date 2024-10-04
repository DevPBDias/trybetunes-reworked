import { EllipsisIcon, PlayCircle, Heart } from "lucide-react";
import Image from "next/image";
import album from "@/assets/images/album.png";
import "./styles.scss";

const PlayerCardMusic = () => {
  return (
    <section className="container-card">
      <div className="first-content">
        <EllipsisIcon className="icon" size={24} color="#001400" />
        <picture className="container-album-image">
          <Image
            className="album-image"
            src={album}
            alt="main hero image"
            priority
          />
        </picture>
        <div className="text-content">
          <p>Song name</p>
          <span>Artist name</span>
        </div>
      </div>
      <div className="second-container">
        <PlayCircle className="icon" size={24} color="#001400" />
        <Heart className="icon" size={24} color="#001400" />
      </div>
    </section>
  );
};

export default PlayerCardMusic;
