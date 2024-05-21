import LocationSection from "./LocationSection/LocationSection";
import ContactFormSection from "./ContactFormSection/ContactFormSecton";
import { useEffect } from "react";
import scrollOnMount from "./../../utilities/scrollOnMount";

const ContactPage = () => {
  useEffect(() => {
    scrollOnMount();
  }, []);

  return (
    <div>
      <LocationSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;
