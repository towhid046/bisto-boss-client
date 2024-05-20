import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-auto text-base-100 grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#1f2937] py-16 text-center">
        <h2 className="font-semibold uppercase  mb-4 text-lg">Contact Us</h2>
        <ul className="text-center space-y-2">
          <li>123 ABS Street, Uni 21, Bangladesh</li>
          <li>+88 123456789</li>
          <li>Mon - Fri: 08:00 - 22:00</li>
          <li>Sat - Sun: 10:00 - 23:00</li>
        </ul>
      </div>
      <div className="bg-[#111827] py-16 text-center">
        <h2 className="font-semibold uppercase  mb-4 text-lg">Contact Us</h2>
        <p>Join us on social media</p>
        <ul className="flex items-center justify-center gap-5 mt-4 ">
          <li>
            <FaFacebookF className="text-2xl text-base-100" />
          </li>
          <li>
            <FaInstagramSquare className="text-2xl text-base-100" />
          </li>
          <li>
            <FaXTwitter className="text-2xl text-base-100" />
          </li>
        </ul>
      </div>
      <div className="bg-[#151515] text-center py-4 lg:col-span-2">
        <p>Copyright &copy; CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
