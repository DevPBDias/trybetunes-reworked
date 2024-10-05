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
      <section>
        <section>
          <picture>
            <Image src={album} alt="album image" />
          </picture>
          <div>
            <h3>Veja outros álbuns</h3>
            <div>
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1>Album name do Linkin Park</h1>
            <p>Lançado em: 2003</p>
            <p>Este álbum possui 20 músicas</p>
          </div>
          <div>
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
