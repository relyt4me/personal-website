import fridgeImg from "../assets/fridgeglass.png";
import leomundImg from "../assets/leomund.png";

export const projectData = [
  {
    name: "Fridge to Glass",
    stack: ["React", "React Router", "React Testing Library", "Redux"],
    repoURL: "https://github.com/relyt4me/stretch-project",
    liveURL: "https://fridge-to-glass.vercel.app/",
    description:
      "A cocktail searching site where a user can filter and search for cocktails by the ingredients they may already have at home. Each cocktail comes with a recipe and users may even look to a random recipe if that suits them.",
    screenshot: fridgeImg,
  },
  {
    name: "Leomund's Superhut",
    stack: ["React", "React Router", "Jest", "Restful API"],
    repoURL: "https://github.com/relyt4me/leomunds-superhut",
    liveURL: "https://leomunds-superhut.herokuapp.com/",
    description:
      "A shopping tool app used to assist the Game masters for Dungeons and Dragons. Allows for the user to browse, search and add items to a cart that tallies a total converted gold value. The user can also manipulate the total cost giving discounts or applying taxes.",
    screenshot: leomundImg,
  },
];
