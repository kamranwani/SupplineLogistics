import { useState } from "react";
import Card from "../components/card";
const Blog = () => {
  const [Data, setData] = useState([
    {
      id: 1,
      image: "/blurredTraffic.svg",
      paragraph:
        "As a Transport and logistics company,our job is to get your goods safely",
      footer: "Learn more",
    },
    {
      id: 2,
      image: "/professionalTruckDriver.svg",
      paragraph:
        "As a Transport and logistics company,our job is to get your goods safely",
      footer: "Learn more",
    },
    {
      id: 3,
      image: "/manByTruck.svg",
      paragraph:
        "As a Transport and logistics company,our job is to get your goods safely",
      footer: "Learn more",
    },
  ]);
  return (
    <div className="blog card-header ">
      <header>
        <h2>Blog</h2>
        <p>View all</p>
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

export default Blog;
