import Hero from "./Hero/Hero";
import ItemList from "./ItemList/ItemList";
import SinglePoster from "./SinglePoster/SinglePoster";
import MenuSection from "./MenuSection/MenuSection";
import RecommendsSection from "./RecommendsSection/RecommendsSection";
import FromOurMenu from "./FromOurMenu/FromOurMenu";
import Testimonials from "./Testimonials/Testimonials";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ItemList />
      <SinglePoster />
      <MenuSection />
      <RecommendsSection />
      <FromOurMenu />
      <Testimonials />
    </div>
  );
};

export default HomePage;
