import MenuItems from "./../../../components/shared/MenuItems/MenuItems";
import SectionButton from "./../../../components/shared/SectionButton/SectionButton";
import PageBanner from "./../../../components/shared/PageBanner/PageBanner";
import img from "../../../assets/menu/salad-bg.jpg";
const SaladSection = () => {
  return (
    <section className="py-12">
      <PageBanner
        img={img}
        title="salad"
        subTitle="This is a simple subtitle of the Salad section and this text will be changed in later "
      />
      <div>
        <MenuItems menuCategory="salad" />
        <SectionButton buttonTitle={"Order your favorite food"} />
      </div>
    </section>
  );
};

export default SaladSection;
