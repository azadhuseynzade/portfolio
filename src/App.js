import "./App.css";
import Header from "../src/components/Header";
import Introduction from "../src/components/Introduction";
import About from "../src/components/About";
import Work from "../src/components/Work";
import Projects from "../src/components/Projects";
import OtherProjects from "../src/components/OtherProjects";
import Touch from "../src/components/Touch";
import Fixed from "../src/components/Fixed";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Work />
      <Projects />
      <OtherProjects />
      <Touch />
      <Fixed />
    </div>
  );
}

export default App;
