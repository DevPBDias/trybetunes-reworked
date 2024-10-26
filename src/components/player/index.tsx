import { ISong } from "@/types/music.types";
import "./styles.scss";
import PlayerCard from "./PlayerCard";

interface ListProps {
  data: ISong[];
}

const PlayerList = ({ data }: ListProps) => {
  return (
    <>
      {data?.length === 0 ? (
        <p>Nenhum álbum foi encontrado</p>
      ) : (
        <section className="container-music-player">
          {data?.map((music: ISong) => (
            <PlayerCard music={music} key={music.trackId} />
          ))}
        </section>
      )}
    </>
  );
};

export default PlayerList;
