import "./Experience.css";
import { resumeData } from "../../data/resumeData";
import InfoCard from "./InfoCard/InfoCard";
import { useState } from "react";

const Experience = () => {
  const [jobs, setJobs] = useState(resumeData.jobs);
  const [education, setEducation] = useState(resumeData.education);

  const printCards = (cardData) => {
    console.log(cardData);
    return cardData.map((card) => {
      return <InfoCard information={card} />;
    });
  };

  return (
    <div className="experience-education">
      <div className="experience">
        <h1>Experience</h1>
        {printCards(jobs)}
      </div>
      <div className="education">
        <h1>Education</h1>
        {printCards(education)}
      </div>
    </div>
  );
};

export default Experience;
