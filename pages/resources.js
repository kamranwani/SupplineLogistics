import IndustryReports from "./industryreports";
import Header from "../components/header";
import Blog from "./blog";
const Resources = () => {
  return (
    <div className="Resources">
      <Header />
      <div className="IndustryNBlog">
        <IndustryReports />
        <Blog />
      </div>
    </div>
  );
};

export default Resources;
