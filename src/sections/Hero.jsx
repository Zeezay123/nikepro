import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"



const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)
  return (
    <section id="home" className="flex xl:flex-row flex-col justify-start items-center w-full min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:[72px] max-sm:leading-[82] font-bold"><span className=" xl:bg-white rounded-lg
        xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
        <span className="text-coral-red inline-block mt-3"> Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray leading-8 mt-6 mb-14 text-lg sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label = "Shop Now" iconURL={arrowRight} />
 
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-20">
        {statistics.map((stat)=>(
          <div key={stat.label}>
           <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
           <p className=" leading-7 font-montserrat text-slate-gray">{stat.label}</p>
          </div>
        ))}
 
      </div>

      </div>
      <div className="flex flex-1  justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImage} alt="shoe collection" 
        width={610}
        height={500}
        className=" object-contain relative z-10"
        /> 
          <div className="flex z-10 absolute w-full justify-center items-end xl:min-h-screen  gap-5 mt-20">
       {shoes.map((shoe)=> (
          
          <ShoeCard 
          imgURL={shoe}
          changeShoe = {(shoe)=> setBigShoeImage(shoe) }
          bigShoeImage = {bigShoeImage}

          
          />
      ))}
 </div>
      
         
        
          </div>
    </section>
  )
}

export default Hero