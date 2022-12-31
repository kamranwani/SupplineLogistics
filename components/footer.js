import { useState } from "react";
import Icon from "./Icons/fb";
import SupplineLogo from "../assets/Suppline.svg";
import styles from "../styles/Footer.module.css";

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
    <div className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.logo}>
          <img src={SupplineLogo.src} />
        </div>
        <div className={styles.allServices}>
          <h2>Services</h2>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </div>
        <div className={styles.allResources}>
          <h2>Resources</h2>
          {resources.map((resource) => (
            <li key={resource}>{resource}</li>
          ))}
        </div>
        <div className={styles.industriesContact}>
          <div>
            <h2>Industries</h2>
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </div>
          <div className={styles.allContact}>
            <h2>Contact</h2>
            {contacts.map((contact) => (
              <li key={contact}>{contact}</li>
            ))}
          </div>
        </div>
        <div className={styles.social}>
          <h2>Social</h2>
          <div className={styles.socialIcons}>
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
      <div className={styles.bottomContent}>
        <p>Copyright &#169; Suppline.All rights reserved.</p>
        <p>Privacy Policy | Cookies Policy</p>
      </div>
    </div>
  );
};

export default Footer;
