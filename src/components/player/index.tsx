import { ISong } from "@/types/music.types";
import "./styles.scss";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ data }: any | ISong[]) => {
  return (
    <>
      {data?.length === 0 ? (
        <p>Nenhum álbum foi encontrado</p>
      ) : (
        <section className="container-music-player">
          {data?.map((music: any, index: number) => (
            <PlayerCard music={music} index={index} />
          ))}
        </section>
      )}
    </>
  );
};

export default PlayerList;
