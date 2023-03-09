import styles from "./styles.module.css";

const Post = ({ text = "пост", img }) => (
  <div className={styles.wrapper}>
    <div>
      <img src={img} alt='avatar' />
    </div>
    <span>{text}</span>
  </div>
);

export default Post;
