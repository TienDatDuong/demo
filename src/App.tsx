import Header from "./header/header";
import Intro from "./body/intro";
import About from "./body/About";
import Experience from "./body/Experience";
import Works from "./body/Words";
import Contact from "./body/Contact";
function App(): JSX.Element {
  return (
    <div className="overflow-auto" >
      <Header />
      <Intro />
      <About />
      <Experience />
      <Works />
      <Contact/>
    </div>
    
  );
}

export default App;
