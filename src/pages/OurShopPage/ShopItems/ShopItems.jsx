import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OurMenuList from "./../OurMenuList/OurMenuList";

const ShopItems = () => {
  const items = ["salad", "pizza", "soup", "dessert", "drinks"];

  return (
    <Tabs>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>

      {items.map((item, index) => (
        <TabPanel key={index}>
          <OurMenuList category={item} />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ShopItems;
