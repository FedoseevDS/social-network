import kateImg from "../../../assets/img/kate.png";
import pit from "../../../assets/img/pit.png";

import Post from "../../common/post/post";

import styles from "./styles.module.css";

const MyPost = () => (
  <div className={styles.wrapper}>
    <div className={styles.newPost}>
      <textarea />
      <button>New post</button>
    </div>
    <div>
      <Post text={"Пост 1"} img={kateImg} />
      <Post text={"Пост 2"} img={pit} />
    </div>
  </div>
);

export default MyPost;
