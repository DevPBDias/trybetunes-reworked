import { IArtist } from "@/services/musicData";
import "./styles.scss";

const PlayerCard = ({ data }: any) => {
  return (
    <>
      {data?.length === 0 ? (
        <p>Nenhum álbum foi encontrado</p>
      ) : (
        <section className="container-music-player">
          {data?.map((music: any, index: number) => (
            <div className="container-song" key={index}>
              <p>{music.trackName}</p>
              <audio
                className="container-audio"
                src={music.previewUrl}
                controls
              >
                <track kind="captions" />O seu navegador não suporta o elemento
                <code>audio</code>.
              </audio>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default PlayerCard;
