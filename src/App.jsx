import Navbar from "./components/Navbar"
import Stripes from "./components/Stripes"
import WorkHero from "./components/WorkHero"



function App() {
  

  return (
   <div className="bg-zinc-900  w-full h-screen text-white ">
    <Navbar />
    <WorkHero />
    <Stripes />
   </div>
  )
}

export default App
