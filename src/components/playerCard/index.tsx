import { EllipsisIcon, PlayCircle, Heart } from "lucide-react";
import "./styles.scss";
interface PlayerProps {
  albumImg: string;
  songName: string;
  artistName: string;
}

const PlayerCardMusic = ({ artistName, albumImg, songName }: PlayerProps) => {
  return (
    <section className="container-card">
      <div className="first-content">
        <picture className="container-album-image">
          <img className="album-image" src={albumImg} alt="album image" />
        </picture>
        <div className="text-content">
          <p>{songName}</p>
          <span>{artistName}</span>
        </div>
      </div>
      <div className="second-container">
        <PlayCircle className="icon" size={24} color="#001400" />
      </div>
    </section>
  );
};

export default PlayerCardMusic;
