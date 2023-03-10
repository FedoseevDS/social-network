import alisa from "../../../assets/img/alisa.png";

import MyPost from "../../posts/myPosts/myPosts";

import styles from "./styles.module.css";

const Profile = () => (
  <div className={styles.userPage}>
    <div>
      <img src={alisa} alt="picture on the user's page" />
    </div>
    <div>ava + description</div>
    <MyPost />
  </div>
);

export default Profile;
