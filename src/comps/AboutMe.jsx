import pfp from "../icons/pfp-modified.png";

function AboutMe() {
  return (
    <div id="about-me" className="AboutMe">
      <h1>About Me</h1>
      <img alt="Profile Picture" src={pfp} className="AboutMe-pfp" />
      <div className="AboutMe-horizontal">
        <div className="AboutMe-short">
          <ul>
            <li>
              <strong>Name:</strong>
              <br /> Ted Lee
            </li>
            <li>
              <strong>Interests:</strong>
              <br />
              <ul>
                <li>- Software Engineering</li>
                <li>- Full-stack development</li>
                <li>- Cybersecurity</li>
                <li>- Systems programming</li>
              </ul>
            </li>
            <li>
              <strong>Email:</strong>
              <br /> tedlee868@gmail.com
            </li>
            <li>
              <strong>Degree:</strong>
              <br /> B.Eng Software Engineering - Security Stream
            </li>
          </ul>
        </div>
        <div className="AboutMe-divider"></div>
        <div className="AboutMe-text">
          <p>
            I’m a third-year Software Engineering student at York University,
            specializing in the Security Stream, and on track to graduate in
            April 2026. My focus is on full-stack web development and
            cybersecurity, and I’m currently learning systems-level programming
            with C and C++. I’ve worked on various personal and academic
            projects using technologies like JavaScript, TypeScript, Python,
            Java, and the MERN stack.
          </p>
          <p>
            One of my notable projects is <i>RateMyHall.com</i> A web
            application designed to allow students to review and rate university
            lecture halls and give voice to their concerns. The app includes
            features such as image uploads via AWS S3, a user review system, and
            session management using JWTs. I’m always seeking new challenges to
            push my development skills and am excited about using my knowledge
            to build impactful, secure applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
