import Image from "next/image";
import albumImage from "@/assets/images/album.png";
import "./styles.scss";

const AlbumCard = () => {
  return (
    <section className="container-album-card">
      <picture className="container-album-image">
        <Image className="album-image" src={albumImage} alt="album image" />
      </picture>
      <div className="text-album-content">
        <p>Album name</p>
        <span>Artist name</span>
      </div>
    </section>
  );
};

export default AlbumCard;
