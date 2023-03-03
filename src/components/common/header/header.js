import logo from "../../../assets/img/logo.png";

import "./styles.css";

const Header = () => (
  <header className="header-wrapper">
    <img src={logo} />
    <div>
      <h1>Позитив</h1>
    </div>
  </header>
);

export default Header;
