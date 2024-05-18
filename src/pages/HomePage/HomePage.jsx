import Hero from "./Hero/Hero";
import ItemList from "./ItemList/ItemList";
import SinglePoster from "./SinglePoster/SinglePoster";
import MenuSection from "./MenuSection/MenuSection";
import RecommendsSection from "./RecommendsSection/RecommendsSection";
import FromOurMenu from "./FromOurMenu/FromOurMenu";
import Testimonials from "./Testimonials/Testimonials";
import PageHelmet from "./../../components/shared/PageHelmet/PageHelmet";
import scrollOnMount from "../../utilities/scrollOnMount";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    scrollOnMount();
  }, []);
  return (
    <div>
      <PageHelmet title="Home" />
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
