import { ISong } from "@/types/music.types";

interface CardProps {
  music: ISong;
}

const PlayerCard = ({ music }: CardProps) => {
  return (
    <div className="container-song">
      <p>{music.trackName}</p>
      <audio className="container-audio" src={music.previewUrl} controls>
        <track kind="captions" />O seu navegador não suporta o elemento
        <code>audio</code>.
      </audio>
    </div>
  );
};

export default PlayerCard;
