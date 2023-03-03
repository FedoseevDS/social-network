import alisa from "../../../assets/img/alisa.png";

import "./styles.css";

const Profile = () => (
  <div className="userPage">
    <div>
      <img src={alisa} />
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
