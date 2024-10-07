"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import heroImg from "@/assets/images/main-hero.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AlbumCard from "@/components/playerCard";
import { useEffect, useState } from "react";
import { musicCoreApi } from "@/services/musicData";

const Dashboard = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const saveData = async () => {
      const { chart_items } = await musicCoreApi(
        "chart/albums/?time_period=day&per_page=10&page=1"
      );
      const slicedAlbums = chart_items.slice(0, 6);
      setData(slicedAlbums);
    };
    saveData();
  }, []);

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
          <Link href="/dashboard/music">
            <p>Descubra</p>
            <ArrowUpRight size={24} color="#EBFFEB" />
          </Link>
        </section>
        <section className="container-musics">
          <h3>Descubra novas músicas todo dia</h3>
          <div className="container-cards">
            {data ? (
              data?.map((album: any) => (
                <AlbumCard
                  key={album.item.id}
                  albumId={album.item.id}
                  albumImg={album.item.cover_art_thumbnail_url}
                  albumName={album.item.name}
                  artistName={album.item.artist.name}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
