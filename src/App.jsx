import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import WorkHero from "./components/WorkHero"




function App() {
  

  return (
   <div className="bg-zinc-900  w-full min-h-screen text-white ">
    <Navbar />
    <WorkHero />
    <Stripes />
    <Products />
   </div>
  )
}

export default App
