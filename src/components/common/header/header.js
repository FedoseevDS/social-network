import logo from "../../../assets/img/logo.png";

import styles from "./styles.module.css";

const Header = () => (
  <header className={styles.wrapper}>
    <img src={logo} alt='logo' />
    <div>
      <h1>Позитив</h1>
    </div>
  </header>
);

export default Header;
