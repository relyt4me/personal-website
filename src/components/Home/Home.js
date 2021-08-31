import "./Home.css";
import { resumeData } from "../../data/resumeData";
import gitHubIcon from "../../assets/github-icon.png";
import linkedIcon from "../../assets/linkedin-icon.png";
import { floatIcons } from "./float-icons/float-icons";

const Home = () => {
  const { name, gitHubURL, linkedInURL } = resumeData;

  const printIcons = () => {
    return floatIcons.map(({ image, name }) => {
      return <img src={image} alt={`small ${name} icon`} key={`${name}`} />;
    });
  };

  return (
    <div>
      <section className="home">
        <h1>{name}</h1>
        <div className="links">
          <a href={gitHubURL} tabIndex="0">
            <img src={gitHubIcon} alt="git hub icon" />
          </a>
          <a href={linkedInURL} tabIndex="0">
            <img src={linkedIcon} alt="linked in icon" />
          </a>
        </div>
        <div className="float-icons">{printIcons()}</div>
      </section>
    </div>
  );
};

export default Home;
