import { useState } from "react";
import Card from "../components/card";

const Resources = () => {
  const [Data, setData] = useState([
    {
      id: 1,
      heading: "Industry Reports",
      image: "/Layer2.svg",
      paragraph: "Industry Reports",
      footer: "Learn more",
    },
    {
      id: 2,
      heading: "Industry Reports2",
      image: "../assets/layer2",
      paragraph: "Container Shipping",
      footer: "Learn more",
    },
    {
      id: 3,
      heading: "Industry Reports3",
      image: "../assets/layer2",

      paragraph: "Port Information",
      footer: "Learn more",
    },
    {
      id: 4,
      heading: "Industry Reports3",
      image: "../assets/layer2",
      paragraph:
        "As a Transport and logistics company,our job is to get your goods safely",
      footer: "Learn more",
    },
    {
      id: 5,
      heading: "Industry Reports3",
      image: "../assets/layer2",
      paragraph:
        "As a Transport and logistics company,our job is to get your goods safely",
      footer: "Learn more",
    },
    {
      id: 6,
      heading: "Industry Reports3",
      image: "../assets/layer2",
      paragraph:
        "As a Transport and logistics company,our job is to get your goods safely",
      footer: "Learn more",
    },
  ]);

  return (
    <div className="Resources">
      {Data.map((obj) => (
        <Card
          key={obj.id}
          heading2={obj.heading}
          image={obj.image}
          paragraph={obj.paragraph}
          footer={obj.footer}
        />
      ))}
    </div>
  );
};

export default Resources;
