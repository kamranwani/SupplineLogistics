import Navbar from "../pages/navbar";
import SupplineLogo from "../assets/Suppline.svg";
import Icon from "./Icons/fb";
const Header = () => {
  return (
    <div className="mainHeader">
      <div className="left">
        <div className="logo">
          <img src={SupplineLogo.src} />
        </div>
        <Navbar />
        <h2>Resources</h2>
        <p>
          We collaborate with industry experts to produce up to date resources
          that are free to download.
        </p>
      </div>
      <div className="right">
        <div className="hamburger">
          <Icon name="hamburger" />
        </div>
        <div className="dropdown-arrow">
          <Icon name="downarrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
