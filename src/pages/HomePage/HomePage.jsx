import Hero from "./Hero/Hero";
import ItemList from "./ItemList/ItemList";
import SinglePoster from "./SinglePoster/SinglePoster";
import MenuSection from "./MenuSection/MenuSection";
import RecommendsSection from "./RecommendsSection/RecommendsSection";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ItemList />
      <SinglePoster />
      <MenuSection />
      <RecommendsSection />
    </div>
  );
};

export default HomePage;
