import Header from "../../components/Header/Header";
import type { UserProfile } from "../../types/candidate.ts";
import userProfileImage from "../../assets/user-profile-illustration.png";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation.tsx";
import "./Dashboard.css";

export default function Dashboard() {
  const user: UserProfile = {
    name: "Phyllis Yang",
    company: "Silicon Links Inc",
    imageUrl: userProfileImage,
  };

  return (
    <>
      <LeftNavigation />

      <div className="main-content-wrapper">
        <div className="app">
          <Header user={user} />
          <main className="main-content">{/* candidate profile */}</main>
        </div>
      </div>
    </>
  );
}
