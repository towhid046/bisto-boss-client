import MenuItems from "./../../../components/shared/MenuItems/MenuItems";
import SectionButton from "./../../../components/shared/SectionButton/SectionButton";
import SectionHeader from './../../../components/shared/SectionHeader/SectionHeader';
const OfferedSection = () => {
  return (
    <section className="py-12">
      <div>
        <SectionHeader title={`Don't miss`} heading={`Today's Offer`} />
        <MenuItems menuCategory="offered" />
        <SectionButton buttonTitle={"Order your favorite food"} />
      </div>
    </section>
  );
};

export default OfferedSection;
