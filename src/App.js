import Header from "./components/common/header/header";
import SideBar from "./components/common/sideBar/sideBar";
import Profile from "./components/common/profile/profile";

import "./App.css";

const App = () => (
  <div className="app-wrapper">
    <Header />
    <SideBar />
    <Profile />
  </div>
);

export default App;
