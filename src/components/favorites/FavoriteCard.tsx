"use client";
import { PlayCircle } from "lucide-react";
import "./styles.scss";
import { useRouter } from "next/navigation";
import { IAlbum } from "@/types/music.types";

interface FavoriteProps {
  data: IAlbum;
}

const FavoriteCard = ({ data }: FavoriteProps) => {
  const router = useRouter();

  return (
    <section
      className="container-card"
      onClick={() => router.push(`/dashboard/album/${data.albumId}`)}
    >
      <div className="first-content">
        <picture className="container-album-image">
          <img className="album-image" src={data.albumImg} alt="album image" />
        </picture>
        <div className="text-content">
          <p>{data.albumName}</p>
          <span>{data.artistName}</span>
          <div className="second-container">
            <PlayCircle className="icon" size={32} color="#EBFFEB" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteCard;
