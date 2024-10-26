import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/search/SearchBar";
import "./profile.scss";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  return (
    <main className="main-profile">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Editar perfil</h3>
      <ProfileForm />
    </main>
  );
};

export default ProfilePage;
