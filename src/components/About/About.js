import "./About.css";
import { resumeData } from "../../data/resumeData";

const About = () => {
  const { name, profilePic, bioDescription } = resumeData;

  return (
    <div>
      <section className="about">
        <img src={`${profilePic}`} alt={`${name} headshot`} />
        <article className="bio">{bioDescription}</article>
      </section>
    </div>
  );
};

export default About;
