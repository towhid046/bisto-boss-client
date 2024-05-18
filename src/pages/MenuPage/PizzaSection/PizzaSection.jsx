import MenuItems from "./../../../components/shared/MenuItems/MenuItems";
import SectionButton from "./../../../components/shared/SectionButton/SectionButton";
import PageBanner from "./../../../components/shared/PageBanner/PageBanner";
import img from "../../../assets/menu/pizza-bg.jpg";
const PizzaSection = () => {
  return (
    <section className="py-12">
      <PageBanner
        img={img}
        title="Pizza"
        subTitle="This is a simple subtitle of the pizza section and this text will be changed in later "
      />
      <div>
        <MenuItems menuCategory="pizza" />
        <SectionButton buttonTitle={"Order your favorite food"} />
      </div>
    </section>
  );
};

export default PizzaSection;
