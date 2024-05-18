import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
const PageHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>Bisto Boss | {title}</title>
    </Helmet>
  );
};

PageHelmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHelmet;
