const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="Logo" />
      </div>

      <div className="layout">
        <li>Menu</li>
        <li>Location</li>
        <li>Contact</li>
        <li>About</li>
      </div>

      <div className="btn">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
