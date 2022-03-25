import Header from "./header/header";
import Intro from "./body/intro";
import About from "./body/About";
import Experience from "./body/Experience";
import Works from "./body/Words";
import Contact from "./body/Contact";
import Loader from "./header/Loader";
import {useState} from 'react'
function App(): JSX.Element {
  const [load,setLoad] = useState(<Loader />)
  setTimeout(()=>{
      setLoad(
        (<Header />)
      )
  },5000)
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-auto rounded" >
      {load}
      <Intro />
      <About />
      <Experience />
      <Works />
      <Contact/>
    </div>
    
  );
}

export default App;
