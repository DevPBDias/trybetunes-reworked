"use client";
import { PlayCircle } from "lucide-react";
import "./styles.scss";
import { useRouter } from "next/navigation";
import { IArtist } from "@/types/music.types";

interface AlbumProps {
  data: IArtist;
}

const AlbumCard = ({ data }: AlbumProps) => {
  const router = useRouter();

  return (
    <section
      className="container-card"
      onClick={() => router.push(`/dashboard/album/${data.collectionId}`)}
    >
      <div className="first-content">
        <picture className="container-album-image">
          <img
            className="album-image"
            src={data.artworkUrl100}
            alt="album image"
          />
        </picture>
        <div className="text-content">
          <p>{data.collectionName}</p>
          <span>{data.artistName}</span>
          <div className="second-container">
            <PlayCircle className="icon" size={32} color="#EBFFEB" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumCard;
