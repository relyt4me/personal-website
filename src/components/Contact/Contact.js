import "./Contact.css";
import { resumeData } from "../../data/resumeData";
import gitHubIcon from "../../assets/github-icon.png";
import linkedIcon from "../../assets/linkedin-icon.png";
import emailIcon from "../../assets/email-icon.png";

const Contact = () => {
  const { resumeURL, linkedInURL, gitHubURL, emailURL } = resumeData;
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>
        <strong>{resumeData.name}</strong>
        <br />
        {resumeData.location}
        <br />
        <a href={resumeURL}>Resume</a>
        <br />
        {emailURL}
      </p>
      <div className="contact-buttons">
        <a href={gitHubURL} tabIndex="0">
          <img src={gitHubIcon} alt="git hub icon" />
        </a>
        <a href={linkedInURL} tabIndex="0">
          <img src={linkedIcon} alt="linked in icon" />
        </a>
        <a href={`mailto: ${emailURL}`} tabIndex="0">
          <img src={emailIcon} alt="email icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
