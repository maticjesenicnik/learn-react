import Challenges from "../components/Challenges.jsx";
import Header from "../components/Header.jsx";
import ChallengesContextProvider from "../store/challenges-context.jsx";

export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}