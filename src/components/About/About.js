import "./About.css";
import { resumeData } from "../../data/resumeData";
import profilePic from "../../assets/profilePic.jpg";

const About = () => {
  const { name, bioDescription } = resumeData;

  return (
    <div>
      <section className="about">
        <img src={profilePic} alt={`${name} headshot`} />
        <article className="bio">{bioDescription}</article>
      </section>
    </div>
  );
};

export default About;
