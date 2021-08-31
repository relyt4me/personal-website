import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Home</h1>
      <About />
      <h1>MineSweep</h1>
      <h1>Projects</h1>
      <h1>Experience</h1>
      <h1>Contact</h1>
    </div>
  );
}

export default App;
