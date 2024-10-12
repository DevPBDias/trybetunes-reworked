"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import heroImg from "@/assets/images/main-hero.png";
import { ArrowUpRight } from "lucide-react";
import AlbumCard from "@/components/album";
import { useEffect, useState } from "react";
import { searchAlbumsAPI } from "@/services/musicData";
import Loader from "./loading";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();

  const saveData = async () => {
    const data = await searchAlbumsAPI("Michael");
    const slicedAlbums = data.slice(0, 6);
    setData(slicedAlbums);
  };

  useEffect(() => {
    saveData();
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <main className="container-dashboard">
      <Image
        src={heroImg}
        alt="main hero image"
        style={{ objectFit: "cover" }}
        fill
        quality={100}
        placeholder="blur"
      />
      <section className="container-content">
        <section className="container-seach-date">
          <SearchBar />
          <DateAndWheater />
        </section>
        <section className="text-container">
          <h1>
            O lugar onde descobre o
            <br />
            que há de melhor no
            <br />
            mundo da música
          </h1>
          <button
            type="button"
            onClick={() => router.push("/dashboard/search/Michael")}
          >
            <p>Descubra</p>
            <ArrowUpRight size={24} color="#EBFFEB" />
          </button>
        </section>
        <section className="container-musics">
          <h3>Descubra novas músicas todo dia</h3>
          <div className="container-cards">
            {data &&
              data?.map((album: any) => (
                <AlbumCard
                  key={album.collectionId}
                  albumId={album.collectionId}
                  albumImg={album.artworkUrl100}
                  albumName={album.collectionName}
                  artistName={album.artistName}
                />
              ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
