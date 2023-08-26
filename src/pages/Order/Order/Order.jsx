import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../../assets/shop/order.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = ["offered", "salad", "pizza", "soup", "dessert"];
  const { category } = useParams(); //
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  //   console.log(category);

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Restro98 | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>
            <Link to="/order/offered">Offered</Link>
          </Tab>
          <Tab>
            <Link to="/order/salad">Salad</Link>
          </Tab>
          <Tab>
            <Link to="/order/pizza">Pizza</Link>
          </Tab>
          <Tab>
            <Link to="/order/soup">Soup</Link>
          </Tab>
          <Tab>
            <Link to="/order/dessert">Dessert</Link>
          </Tab>
          <Tab>
            <Link to="/order/drinks">Drinks</Link>
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
