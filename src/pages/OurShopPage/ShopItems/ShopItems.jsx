import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurMenuList from "./../OurMenuList/OurMenuList";

const ShopItems = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("menu.json");
        const data = await res.json();
        setMenus(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const saladMenus = menus.filter((menu) => menu.category === "salad");
  const pizzaMenus = menus.filter((menu) => menu.category === "pizza");
  const soupMenus = menus.filter((menu) => menu.category === "soup");
  const dessertMenus = menus.filter((menu) => menu.category === "dessert");
  const drinksMenus = menus.filter((menu) => menu.category === "drinks");

  return (
    <Tabs>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>

      <TabPanel>
        <OurMenuList menus={saladMenus} />
      </TabPanel>

      <TabPanel>
        <OurMenuList menus={pizzaMenus} />
      </TabPanel>

      <TabPanel>
        <OurMenuList menus={soupMenus} />
      </TabPanel>

      <TabPanel>
        <OurMenuList menus={dessertMenus} />
      </TabPanel>

      <TabPanel>
        <OurMenuList menus={drinksMenus} />
      </TabPanel>
    </Tabs>
  );
};

export default ShopItems;
