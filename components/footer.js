import { useState } from "react";
import Icon from "./Icons/fb";
import SupplineLogo from "../assets/Suppline.svg";

const Footer = () => {
  const [services, setServices] = useState([
    "Logistics Solution",
    "Customs Clearance",
    "Freight Forwading",
    "Ware Housing",
    "Project Logistics",
    "Break Bulk",
    "Heavy Lift",
    "Vessel Handling",
    "Door to Door Handling",
    "Cargo Insurance",
    "Import Consolidation",
    "International Transport",
    "Providing Licensing Services (BIS/EPR/MSME/WPC)",
    "Import Consolidation",
  ]);
  const [resources, setResources] = useState([
    "News Room",
    "Case Studies",
    "Intercom",
    "Downloads",
    "Blog",
    "Container Tracking",
  ]);
  const [industries, setIndustries] = useState([
    "Project Import Cargo",
    "Turnkey Products",
    "Machinery and Equipments",
    "Perfume and Cosmetic",
    "Furniture",
    "Cattle Feed",
  ]);
  const [contacts, setContact] = useState([
    "Contact Us",
    "Enquiry Form",
    "Feedback Form",
    "Bookings",
    "Payments",
  ]);

  return (
    <div className="footer">
      <div className="top-content">
        <div className="logo">
          <img src={SupplineLogo.src} />
        </div>
        <div className="all-services">
          <h2>Services</h2>
          {services.map((service) => (
            <li className="service" key={service}>
              {service}
            </li>
          ))}
        </div>
        <div className="all-resources">
          <h2>Resources</h2>
          {resources.map((resource) => (
            <li className="service" key={resource}>
              {resource}
            </li>
          ))}
        </div>
        <div className="industries-contact">
          <div className="all-industries">
            <h2>Industries</h2>
            {industries.map((industry) => (
              <li className="service" key={industry}>
                {industry}
              </li>
            ))}
          </div>
          <div className="all-contact">
            <h2>Contact</h2>
            {contacts.map((contact) => (
              <li className="service" key={contact}>
                {contact}
              </li>
            ))}
          </div>
        </div>
        <div className="social">
          <h2>Social</h2>
          <div className="social-icons">
            <li className="icon-fb">
              <Icon name="facebook" />
            </li>
            <li>
              <Icon name="instagram" />
            </li>
            <li>
              <Icon name="twitter" />
            </li>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <p>Copyright &#169; Suppline.All rights reserved.</p>
        <p>Privacy Policy | Cookies Policy</p>
      </div>
    </div>
  );
};

export default Footer;
