import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div className="Layout">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
