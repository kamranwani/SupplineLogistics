import Card from "../components/card";
import { useState } from "react";
import Icon from "../components/Icons/fb";
const IndustryReports = () => {
  const [Data, setData] = useState([
    {
      id: 1,
      image: "/Report.svg",
      paragraph: "Industry Reports",
      footer: "Learn more",
    },
    {
      id: 2,
      image: "/Container.svg",
      paragraph: "Container Shipping",
      footer: "Learn more",
    },
    {
      id: 3,
      image: "/Port.svg",
      paragraph: "Port Information",
      footer: "Learn more",
    },
  ]);
  return (
    <div className="industryReports card-header ">
      <header>
        <h2>Industry & Reports</h2>
        <p>
          View all
          <Icon name="arrow" />
        </p>
      </header>
      <main>
        {Data.map((obj) => (
          <Card
            key={obj.id}
            image={obj.image}
            paragraph={obj.paragraph}
            footer={obj.footer}
          />
        ))}
      </main>
    </div>
  );
};

export default IndustryReports;
