import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
  <section className=" flex jutify-center items-center max-xl:flex-col-reverse 
  max-container gap-10">

    <div className=" flex flex-1">
      <img src={offer} width={773}
      height={687} 
      className=" object-contain w-full" />
 </div>
     <div className="flex flex-1 flex-col">
   <h2 className="text-4xl  font-bold capitalize font-palanquin lg:max-w-lg"> Special <span className="text-coral-red inline-block mt-3">  Offer  </span> 

        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <p className="mt-6  info-text lg:max-w-lg">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
       
       <div className="mt-11 flex flex-wrap gap-4"> <Button label = "Shop Now" iconURL={arrowRight} /> 
        <Button label = "Learn more" 
        backgroundColor ="bg-whites"
        borderColor ="border-slate-gray"
        textColor="text-slate-gray"

/>  </div> 
   </div>
  </section>
  )
}

export default SpecialOffer