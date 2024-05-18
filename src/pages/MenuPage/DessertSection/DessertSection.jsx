import MenuItems from "./../../../components/shared/MenuItems/MenuItems";
import SectionButton from "./../../../components/shared/SectionButton/SectionButton";
import PageBanner from "./../../../components/shared/PageBanner/PageBanner";
import img from "../../../assets/menu/dessert-bg.jpeg";
const DessertSection = () => {
  return (
    <section className="py-12">
      <PageBanner
        img={img}
        title="Desserts"
        subTitle="This is a simple subtitle of the desserts section and this text will be changed in later "
      />
      <div>
        <MenuItems menuCategory="dessert" />
        <SectionButton buttonTitle={"Order your favorite food"} />
      </div>
    </section>
  );
};

export default DessertSection;
