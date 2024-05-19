import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import saladImg from "../../../assets/home/slide1.jpg";
const RecommendsSection = () => {
  const recommended = (
    <div className="bg-base-300">
      <figure>
        <img className="w-full h-60" src={saladImg} alt="" />
      </figure>
      <div className="space-y-2 p-5 text-center">
        <h2 className="font-bold">Caeser Salad</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
          praesentium?
        </p>
        <button className="border-b-2 mt-4 btn transition hover:bg-neutral hover:text-yellow-600 border-b-yellow-600 duration-500 ease-in-out uppercase">
          {" "}
          Add To cart
        </button>
      </div>
    </div>
  );

  return (
    <section className="mb-16">
      <SectionHeader title="Should Try" heading="Chef Recommends" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommended}
        {recommended}
        {recommended}
      </div>
    </section>
  );
};

export default RecommendsSection;
