import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <p className="navbar-text">{" >"}</p>
      <Link href="/resources">Resources</Link>
    </div>
  );
};

export default Navbar;
