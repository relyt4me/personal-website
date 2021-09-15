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
        <div className="card-area">{printCards(jobs)}</div>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div className="card-area">{printCards(education)}</div>
      </div>
    </div>
  );
};

export default Experience;
