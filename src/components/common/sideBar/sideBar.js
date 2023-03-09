import styles from "./styles.module.css";

const SideBar = () => (
  <nav className={styles.sideBar}>
    <div>
      <a href="#">Profile </a>
    </div>
    <div>
      <a href="#">Messages </a>
    </div>
    <div>
      <a href="#">News </a>
    </div>
    <div>
      <a href="#">Music </a>
    </div>
    <div>
      <a href="#">Settings </a>
    </div>
  </nav>
);

export default SideBar;
