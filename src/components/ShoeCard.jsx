import React from 'react'
import { shoes } from '../constants'
import { useState } from 'react'
import { bigShoe1 } from '../assets/images'



const ShoeCard = ({imgURL,changeShoe,bigShoeImage}) => {


function handleClick(){

    if (bigShoeImage != imgURL.bigShoe ){
        changeShoe(imgURL.bigShoe)
    }
    else{
        changeShoe(bigShoeImage)
    }
}


  return (
   
      
        <div  className={` cursor-pointer  border-2 rounded-xl max-sm:flex-1

        ${bigShoeImage === imgURL.bigShoe ?
         'border-coral-red' : 'border-tansparent'} `}

         onClick={handleClick}>

       <div className=' flex justify-center items-center  bg-card bg-cover  bg-center rounded-xl sm:w-40 sm:h-40 max-sm:p-4 '>
         <img src={imgURL.bigShoe} alt="" 
          width={127}
          height={103}
          className=" object-contain" />
       </div>
           

          
        </div>
   

  )
}

export default ShoeCard