import "./InfoCard.css";

const InfoCard = ({ information }) => {
  const printDescription = (description) => {
    return description.map((note, index) => {
      return <li key={index}>{note}</li>;
    });
  };

  return (
    <article className="information-card">
      <h2>{information.name}</h2>
      <h3>{information.position}</h3>
      <h4>{information.time}</h4>
      <div className="description">
        {printDescription(information.description)}
      </div>
    </article>
  );
};

export default InfoCard;
