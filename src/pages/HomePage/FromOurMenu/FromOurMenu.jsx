import bgImg from "../../../assets/home/banner.jpg";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";

import featureImg from "../../../assets/home/featured.jpg";
const FromOurMenu = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="relative bg-cover bg-center bg-fixed bg-no-repeat mb-16"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative lg:py-16 py-10 px-8 text-white lg:px-32">
        <SectionHeader title="check it out" heading="From Our Menu" />
        <div className="flex lg:flex-row flex-col items-center gap-8">
          <figure>
            <img src={featureImg} alt="Featured Item" />
          </figure>
          <div>
            <p>march 20, 2023</p>
            <h3 className="uppercase text-lg">Where can I get some</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              harum inventore? Sed beatae ipsa asperiores veritatis at neque
              obcaecati eos numquam accusamus, illum voluptas quam, minus unde
              voluptatum nostrum. Aut alias mollitia perspiciatis illo animi
            </p>
            <button className="border-b-2 py-4 px-6 mt-8 rounded-xl transition hover:bg-black  uppercase hover:text-base-200 border-base-200 duration-500 ease-in-out">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenu;
