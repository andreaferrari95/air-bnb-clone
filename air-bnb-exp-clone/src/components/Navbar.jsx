import logo from "../assets/images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={logo} alt="Logo AirBnB" />
    </nav>
  );
}

export default Navbar;
