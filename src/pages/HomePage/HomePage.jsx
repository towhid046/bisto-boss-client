import Hero from "./Hero/Hero";
import ItemList from "./ItemList/ItemList";
import SinglePoster from "./SinglePoster/SinglePoster";
import MenuSection from "./MenuSection/MenuSection";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ItemList />
      <SinglePoster />
      <MenuSection />
    </div>
  );
};

export default HomePage;
