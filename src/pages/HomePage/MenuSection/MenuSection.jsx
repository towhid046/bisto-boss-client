import { useEffect, useState } from "react";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";

const MenuSection = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("menu.json");
      const data = await res.json();
      setMenus(data);
    };
    loadData();
  }, []);

  const menuList = menus.slice(0,6).map((menu) => (
    <li key={menu._id} className="flex items-start gap-4">
      <figure>
        <img className="w-24 h-24 rounded-full" src={menu.image} alt="" />
      </figure>
      <div>
        <h3 className="uppercase text-lg font-medium">{menu.name}---------</h3>
        <p>{menu.recipe}</p>
      </div>
      <div>
        <strong className="text-yellow-600">{menu.price}</strong>
      </div>
    </li>
  ));

  return (
    <section className="mb-16">
      <SectionHeader title="Check it out" heading="From our menu" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">{menuList}</div>
      <div className="flex justify-center mt-8">
        <button className="border-b-2 py-4 px-6 rounded-xl transition hover:bg-black hover:text-base-200 border-neutral duration-500 ease-in-out"> View Full Menu</button>
      </div>
      <div className="bg-black mt-20">
        <h2 className="text-center uppercase py-14 text-base-100 text-3xl font-bold">Call Us: +88 01923908787</h2>
      </div>
    </section>
  );
};

export default MenuSection;
