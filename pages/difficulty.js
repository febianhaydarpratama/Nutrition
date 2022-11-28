import Meta from "../components/Meta";
import Header from "../components/Header";
import Difficultylist from "../components/Difficultylist";
import Footer from "../components/Footer";

export default function Difficulty() {
  return (
    <div>
      <Meta title="Nutrition" />

      <Header />

      <Difficultylist />

      <Footer />
    </div>
  );
}