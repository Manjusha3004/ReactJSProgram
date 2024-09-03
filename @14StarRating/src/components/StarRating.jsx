import React, { useState } from 'react'

const  StarRating = () => {
let limit = 5;
const [rating,setRating] = useState(2);
const handleClick = (i) =>
{
    setRating(i+1);
}
  return (
    <>       
    {[...Array(limit)].map((_, i) => (
            <span key={i}
            onClick={() => handleClick(i)}>
                 {i < rating ? "★" : "☆"}
            </span>
        ))}
    </>
    
  )
}

export default StarRating