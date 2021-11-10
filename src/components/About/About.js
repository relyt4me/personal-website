import "./About.css";
import { resumeData } from "../../data/resumeData";
import profilePic from "../../assets/profilePic.jpeg";

const About = () => {
  const { name, bioDescription } = resumeData;

  return (
    <div>
      <section className="about">
        <div className="about-container">
          <img src={profilePic} alt={`${name} headshot`} />
          <article className="bio">{bioDescription}</article>
        </div>
      </section>
    </div>
  );
};

export default About;
