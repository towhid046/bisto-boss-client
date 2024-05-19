import PageBanner from "../../components/shared/PageBanner/PageBanner";
import PageHelmet from "../../components/shared/PageHelmet/PageHelmet";
import img from "../../assets/shop/banner2.jpg";
import ShopItems from "./ShopItems/ShopItems";
import { useEffect } from "react";
import scrollOnMount from "./../../utilities/scrollOnMount";

const OurShopPage = () => {
  useEffect(() => {
    scrollOnMount();
  }, []);

  return (
    <div>
      <PageHelmet title="Our Menu" />
      <PageBanner
        img={img}
        title="Our Shop"
        subTitle="WOULD YOU LIKE TO TRY A DISH?"
      />
      <section className="py-12">
        <ShopItems />
      </section>
    </div>
  );
};

export default OurShopPage;
