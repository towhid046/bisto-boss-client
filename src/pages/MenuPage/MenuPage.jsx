import PageBanner from "./../../components/shared/PageBanner/PageBanner";
import img from "../../assets/menu/banner3.jpg";
import { useEffect } from "react";
import scrollOnMount from "./../../utilities/scrollOnMount";
import PageHelmet from "./../../components/shared/PageHelmet/PageHelmet";
import OfferedSection from "./OfferedSection/OfferedSection";
import DessertSection from "./DessertSection/DessertSection";
const MenuPage = () => {
  useEffect(() => {
    scrollOnMount();
  }, []);

  return (
    <div>
      <PageHelmet title="Our Menu" />
      <PageBanner
        img={img}
        title="Our Menu"
        subTitle="WOULD YOU LIKE TO TRY A DISH?"
      />
      <OfferedSection />
      <DessertSection />
    </div>
  );
};

export default MenuPage;
