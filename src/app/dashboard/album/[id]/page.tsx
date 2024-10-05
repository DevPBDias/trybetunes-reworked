import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import "./styles.scss";
import Image from "next/image";
import album from "@/assets/images/album.png";
import AlbumCard from "@/components/albumCard/AlbumCard";
import PlayerCardMusic from "@/components/playerCard";

const AlbumID = () => {
  return (
    <main className="main-album-id">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <section className="container-content">
        <section className="first-content-albums">
          <picture>
            <Image className="album-image-big" src={album} alt="album image" />
          </picture>
          <div className="related-albums">
            <h3>Veja outros álbuns</h3>
            <div className="container-related">
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
            </div>
          </div>
        </section>
        <section className="second-content-albums">
          <div className="info-album">
            <h1>Album name do Linkin Park</h1>
            <p>Lançado em: 2003</p>
            <p>Este álbum possui 20 músicas</p>
          </div>
          <div className="container-musics">
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
            <PlayerCardMusic />
          </div>
        </section>
      </section>
    </main>
  );
};

export default AlbumID;
