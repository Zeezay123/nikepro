import { reviews } from "../constants"
import { ReviewCard } from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What Our <span className=" text-coral-red"> Customers </span> say
      </h3>
<p className=" flex justify-center item-center mt-4 m-auto info-text max-w-lg text-center"> 
Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
</p>

<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
 {reviews.map((reveiw)=>(
  <ReviewCard 
  key={reveiw.customerName}{...reveiw}
  
  
  />
 ))}

</div>
    </section>
  )
}

export default CustomerReviews