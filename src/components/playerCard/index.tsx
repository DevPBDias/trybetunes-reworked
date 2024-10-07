"use client";
import { EllipsisIcon, PlayCircle, Heart } from "lucide-react";
import "./styles.scss";
import { useRouter } from "next/navigation";
interface PlayerProps {
  albumImg: string;
  albumName: string;
  artistName: string;
  albumId: string;
}

const AlbumCard = ({
  artistName,
  albumImg,
  albumName,
  albumId,
}: PlayerProps) => {
  const router = useRouter();

  return (
    <section
      className="container-card"
      onClick={() => router.push(`/dashboard/album/${albumId}`)}
    >
      <div className="first-content">
        <picture className="container-album-image">
          <img className="album-image" src={albumImg} alt="album image" />
        </picture>
        <div className="text-content">
          <p>{albumName}</p>
          <span>{artistName}</span>
        </div>
      </div>
      <div className="second-container">
        <PlayCircle className="icon" size={24} color="#001400" />
      </div>
    </section>
  );
};

export default AlbumCard;
