import "./TechnicalSkills.css";
import { resumeData } from "../../data/resumeData";

const TechnicalSkills = () => {
  const printSkills = () => {
    return resumeData.techSkills.map((skill) => {
      return <li>{skill}</li>;
    });
  };

  return (
    <div className="technical-skills skills">
      <h1>Technical Skills</h1>
      <div className="tech-skill-list">{printSkills()}</div>
    </div>
  );
};

export default TechnicalSkills;
