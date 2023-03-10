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
      <Post message="Hi, how are you?" img={kateImg} like='12' />
      <Post message='It is my first post' img={pit} like='21' />
    </div>
  </div>
);

export default MyPost;
