import PropTypes from "prop-types";
const SectionHeader = ({
  title = "Section Title",
  heading = "Section Heading",
}) => {
  return (
    <header className="my-10 max-w-xs mx-auto text-center">
      <p className="text-lg italic text-yellow-600  mb-3">---{title}---</p>
      <h2 className="font-semibold text-3xl border-y-2 py-3 uppercase">
        {heading}
      </h2>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default SectionHeader;
