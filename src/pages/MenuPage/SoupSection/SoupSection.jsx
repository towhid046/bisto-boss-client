import MenuItems from "./../../../components/shared/MenuItems/MenuItems";
import SectionButton from "./../../../components/shared/SectionButton/SectionButton";
import PageBanner from "./../../../components/shared/PageBanner/PageBanner";
import img from "../../../assets/menu/soup-bg.jpg";
const SoupSection = () => {
  return (
    <section className="py-12">
      <PageBanner
        img={img}
        title="Soups"
        subTitle="This is a simple subtitle of the Salad section and this text will be changed in later "
      />
      <div>
        <MenuItems menuCategory="soup" />
        <SectionButton buttonTitle={"Order your favorite food"} />
      </div>
    </section>
  );
};

export default SoupSection;
