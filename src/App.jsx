import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Marquees from "./components/Marquees"
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
    <Marquees />
    <Cards />
    <Footer />
   </div>
  )
}

export default App
