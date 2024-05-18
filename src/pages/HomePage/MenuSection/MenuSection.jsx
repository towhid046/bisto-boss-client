import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import MenuItems from "./../../../components/shared/MenuItems/MenuItems";
import SectionButton from "./../../../components/shared/SectionButton/SectionButton";

const MenuSection = () => {
  return (
    <section className="mb-16">
      <SectionHeader title="Check it out" heading="From our menu" />
      <div>
        <MenuItems menuCategory={"popular"} />
        <SectionButton buttonTitle={"View Full Menu"} />
      </div>

      <div className="bg-black mt-20">
        <h2 className="text-center uppercase py-14 text-base-100 text-3xl font-bold">
          Call Us: +88 01923908787
        </h2>
      </div>
    </section>
  );
};

export default MenuSection;
