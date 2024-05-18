import PropTypes from "prop-types";
const PageBanner = ({
  img,
  title = "Page banner title",
  subTitle = "page banner subtitle",
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className={`bg-cover bg-center bg-no-repeat mb-10 bg-fixed px-5 py-28`}
    >
      <div className="relative text-base-100 py-16 lg:max-w-4xl md:max-w-3xl max-w-xl mx-auto text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <h1 className="uppercase font-bold lg:text-5xl md:text-4xl text-3xl">
            {title}
          </h1>
          <p className="uppercase mt-3 text-lg">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

PageBanner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default PageBanner;
