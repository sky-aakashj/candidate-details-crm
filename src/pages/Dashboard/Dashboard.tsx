import { useEffect } from "react";
import type { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import type { AnyAction } from "redux";
import Header from "../../components/Header/Header";
import type { UserProfile } from "../../types/candidate.ts";
import { fetchCandidate } from "../../redux/actions/candidateactions.ts";
import userProfileImage from "../../assets/user-profile-illustration.png";
import LeftNavigation from "../../components/LeftNavigation/LeftNavigation.tsx";
import "./Dashboard.css";
import rootReducer from "../../redux/reducers/rootReducer.ts"; // adjust path as needed
import CandidateProfile from "../../components/CandidateProfile/CandidateProfile.tsx";

interface DashboardProps {
  candidateId: string;
}
type RootState = ReturnType<typeof rootReducer>;

const Dashboard: React.FC<DashboardProps> = ({ candidateId }) => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const user: UserProfile = {
    name: "Phyllis Yang",
    company: "Silicon Links Inc",
    imageUrl: userProfileImage,
  };

  useEffect(() => {
    dispatch(fetchCandidate(candidateId));
  }, [dispatch, candidateId]);

  return (
    <>
      <LeftNavigation />

      <div className="main-content-wrapper">
        <div className="app">
          <Header user={user} />
          <main className="main-content">
            <CandidateProfile />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
