import "./styles/App.css";
import profilepic from "./assets/profile-pic.JPG";
import github from "./assets/github-icon.png";
import linkdenin from "./assets/LinkedIn-icon.png";
import TransparentEffect from "./scripts/transparent-effect.js";
import { useState } from "react";
function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="Container">
      {/*LeftSide part of the website*/}
      <div className="LeftSide">
        <div className="Intro">
          <img src={profilepic} alt="Profile Picture" className="ProfilePic" />
          <span className="Name">Rupesh Malisetty</span>
          <span className="Title">Full Stack Developer</span>
          <a className="Email-Button" href="mailto:mrupesh2005@gmail.com">
            <div
              className={`Email-Container ${
                isClicked ? "transparent-effect" : ""
              }`}
              onClick={() => TransparentEffect(setIsClicked)}
            >
              <span className="Email-Text">Email Me</span>
            </div>
          </a>
          <div className="Socials">
            <a href="https://github.com/Rupesh42590" className="github">
              <img src={github} alt="github" className="github-Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/rupesh-malisetty"
              className="linkdein"
            >
              <img src={linkdenin} alt="linkedin" className="linkdedin-Icon" />
            </a>
          </div>
        </div>
      </div>

      {/*RightSide part of the website*/}
      <div className="RightSide">
        <p>hhhhh</p>
      </div>
    </div>
  );
}

export default App;
