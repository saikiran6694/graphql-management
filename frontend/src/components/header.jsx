import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="bg-light navbar mb-4 p-2">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={Logo} alt="logo" className="mr-2" />
            <div>Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
