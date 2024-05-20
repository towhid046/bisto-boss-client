import OurMenuList from "../../OurShopPage/OurMenuList/OurMenuList";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
const RecommendsSection = () => {

  return (
    <section className="mb-16">
      <SectionHeader title="Should Try" heading="Chef Recommends" />
      <OurMenuList category="popular"/>
    </section>
  );
};

export default RecommendsSection;
