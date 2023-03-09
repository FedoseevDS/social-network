import alisa from "../../../assets/img/alisa.png";

import styles from "./styles.module.css";

const Profile = () => (
  <div className={styles.userPage}>
    <div>
      <img src={alisa} alt="picture on the user's page" />
    </div>
    <div>ava + description</div>
    <div>
      My post
      <div>New post</div>
      <div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  </div>
);

export default Profile;
