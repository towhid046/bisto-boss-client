import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import PageBanner from "../../../components/shared/PageBanner/PageBanner";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import contactImg from '../../../assets/contact/banner.jpg'

const LocationSection = () => {
    const contactInfo = [
        {
          id: 1,
          icon: <FiPhoneCall />,
          title: "Phone",
          location: "+32876783737863",
        },
        {
          id: 2,
          icon: <FaLocationDot />,
          title: "Address",
          location: "+32876783737863",
        },
        {
          id: 1,
          icon: <IoMdTime />,
          title: "Working Hours",
          location: `Mon-Fri: + 0198765672`,
        },
      ];
    return (
        <section>
      <PageBanner
        img={contactImg}
        title="Contact Us"
        subTitle="Would you like to try a Dish"
      />
      <SectionHeader title="Visit Us" heading="Our Location" />

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-16">
        {contactInfo.map((info) => (
          <div key={info.id} className="flex-1">
            <div className="py-3 bg-[#d4a358] text-base-100 text-xl flex justify-center">{info.icon}</div>
            <div className="border px-5 pb-5">
              <div className=" flex justify-center bg-base-300 items-center flex-col pb-10 pt-5 gap-1">
              <h2 className="text-xl font-semibold uppercase ">{info.title}</h2>
              <p>{info.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default LocationSection;