import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function EmailMe() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_edey7em", "template_e2zlz6i", form.current, {
        publicKey: "SJjo_py8JBnt_PBac",
      })
      .then(
        () => {
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        },
      );
  };

  return (
    <div className="email-form-container">
      <h1>Contact</h1>
      <p className="remark">Leave me a message! 👇</p>
      {isSent && <p className="success-message">Message sent successfully!</p>}
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required />
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="extra-info">
        <div>
          <CiLocationOn />
          <p>Toronto, ON</p>
        </div>
        <div>
          <MdEmail />
          <p>School: ted04@my.yorku.ca</p>
          <p>Personal: tedlee868@gmail.com</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ted-lee-/">
            <FaLinkedin />
          </a>
          <p>Linkedin profile</p>
        </div>
      </div>
    </div>
  );
}

export default EmailMe;
