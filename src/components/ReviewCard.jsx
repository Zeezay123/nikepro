import { star } from "../assets/icons"

export const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <section className="flex  justify-center items-center flex-col">
        <div className=" w-40 h-40 rounded-full">
            <img src={imgURL} alt={customerName}
             className=" object-contain rounded-full"
             width={160}
             height={160}
            />
        </div>
        <h3 className="mt-4 font-montserrat font-bold text-2xl">
            {customerName}
        </h3>
        <p className="mt-4 flex gap-2 font-bold text-xl"><span> <img src={star} alt="" /></span> ({rating})</p>
        <p className=" flex justify-center items-center text-center mt-4 font-palanquin word-break info-text">{feedback}</p>
    </section>
  )
}
