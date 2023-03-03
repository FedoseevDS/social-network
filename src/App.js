import logo from "./assets/img/logo.png";
import alisa from "./assets/img/alisa.png";
import "./App.css";

const App = () => (
  <div className="app-wrapper">
    <header className="app-header">
      <img src={logo} />
    </header>
    <nav className="app-nav">
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
    <div className="app-content">
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
  </div>
);

export default App;
