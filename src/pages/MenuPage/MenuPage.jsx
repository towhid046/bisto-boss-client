import PageBanner from "./../../components/shared/PageBanner/PageBanner";
import img from "../../assets/menu/banner3.jpg";
import { useEffect } from "react";
import scrollOnMount from "./../../utilities/scrollOnMount";
import PageHelmet from "./../../components/shared/PageHelmet/PageHelmet";
import OfferedSection from './OfferedSection/OfferedSection';
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
        subTitle="Would you like to try a dish?"
      />
      <OfferedSection/>
    </div>
  );
};

export default MenuPage;
