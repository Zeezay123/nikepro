import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" >

   <div className="flex flex-1 flex-col">
   <h2 className="text-4xl  font-bold capitalize font-palanquin lg:max-w-lg"> We Provide You  
   <span className="text-coral-red inline-block mt-3">  Super  </span> 
         <span className="text-coral-red inline-block mt-3">  Quality  </span>  Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <p className="mt-6  info-text lg:max-w-lg">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
       
       <div className="mt-11"> <Button label = "View details"  /> </div> 
   </div>
   <div className="flex flex-1 justify-center items-center">
    <img src={shoe8} alt="shoe8"
    width={570}
    height={522}
    className=" object-contain" />
   </div>
    </section>
  )
}

export default SuperQuality