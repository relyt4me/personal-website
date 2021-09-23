import "./Nav.css";
import ScrollIntoView from "react-scroll-into-view";

const Nav = () => {
  const printNavButtons = () => {
    let navSections = [
      "home",
      "about",
      "projects",
      "experience",
      "skills",
      "contact",
    ];
    return navSections.map((section) => {
      return (
        <ScrollIntoView
          selector={`.${section}`}
          key={section}
          className="nav-button"
          alignToTop="false"
        >
          <button tabIndex="0" aria-label={`${section} section`}>
            {section.toUpperCase()}
          </button>
        </ScrollIntoView>
      );
    });
  };

  return (
    <nav>
      <h1 className="site-title">My Website</h1>
      <div className="navigation-buttons">{printNavButtons()}</div>
    </nav>
  );
};

export default Nav;
