import PageBanner from "./../../components/shared/PageBanner/PageBanner";
import img from "../../assets/menu/banner3.jpg";
const MenuPage = () => {
  return (
    <div>
      <PageBanner
        img={img}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      />
    </div>
  );
};

export default MenuPage;
