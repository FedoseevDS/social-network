import styles from "./styles.module.css";

const Post = ({ message = "пост", img, like='0' }) => (
  <div className={styles.wrapper}>
    <div>
      <img src={img} alt="avatar" />
    </div>
    <span>{message}</span>
    <span>- like = {like}</span>
  </div>
);

export default Post;
