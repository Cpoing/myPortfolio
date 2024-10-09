import pfp from "../icons/pfp-modified.png";

function AboutMe() {
  return (
    <div id="about-me" className="AboutMe">
      <h1>About Me</h1>
      <img alt="pfp" src={pfp} className="AboutMe-pfp" />
      <div className="AboutMe-horizontal">
        <div className="AboutMe-short">
          <ul>
            <li>
              Name:<br></br> Ted Lee
            </li>
            <li>
              Interests:<br></br>{" "}
            </li>
            <li>
              Email:<br></br> tedlee868@gmail.com
            </li>
            <li>
              Degree:<br></br> B.Eng Software Engineering - Security Stream
            </li>
          </ul>
        </div>
        <div className="AboutMe-divider"></div>
        <div className="AboutMe-text">
          <p>lorem</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
