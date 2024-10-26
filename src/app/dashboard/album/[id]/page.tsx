import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/search/SearchBar";
import "./styles.scss";
import AlbumsTags from "@/components/album/AlbumsTags";
import AlbumImg from "@/components/album/AlbumImg";
import RelatedAlbums from "@/components/album/RelatedAlbums";
import AlbumSongs from "@/components/album/AlbumSongs";

const AlbumID = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <main className="main-album-id">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <section className="container-content">
        <section className="first-content-albums">
          <AlbumImg id={id} />
          <div className="related-albums">
            <h3>Veja outros álbuns</h3>
            <RelatedAlbums id={id} />
          </div>
        </section>
        <section className="second-content-albums">
          <AlbumsTags id={id} />
          <AlbumSongs id={id} />
        </section>
      </section>
    </main>
  );
};

export default AlbumID;
