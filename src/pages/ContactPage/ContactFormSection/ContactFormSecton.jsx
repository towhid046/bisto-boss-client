import captcha from "../../../assets/contact/captcha.png";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import { FaLocationArrow } from "react-icons/fa";
const ContactFormSection = () => {
  return (
    <section className="mb-16">
      <SectionHeader title="Send Us aMessage" heading="Contact Form" />
      <div className="bg-base-300 p-12">
        <form className="space-y-3">
          <div className="flex flex-col xl:flex-row items-center gap-4">
            <div className="w-full">
              <label className="label">
                <strong className="label-text">Name *</strong>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>

            <div className="w-full">
              <label className="label">
                <strong className="label-text">Email *</strong>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">
              <strong className="label-text">Phone *</strong>
            </label>
            <input
              type="number"
              name="subject"
              placeholder="Enter your Subject"
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
              required
            />
          </div>
          <div>
            <label className="label">
              <strong className="label-text">Message *</strong>
            </label>
            <textarea
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3] textarea  text-base xl:h-60 h-40"
              required
              placeholder="Message"
            ></textarea>
          </div>

          <div>
            <img src={captcha} alt="" />
          </div>

          <div className="pt-28 flex justify-center">
            <button className="flex items-center gap-4 btn border-none  rounded-none hover:bg-black text-white bg-[#d4a358]">
             <p> Send message</p>
              <span>
                <FaLocationArrow className="text-base-100" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
