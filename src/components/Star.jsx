import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Star = ({stars, reviews}) => {
    // console.log(typeof(stars));
    const StartRating = Array.from({length:5},(value, index) => {
        const number = index + 0.5;
        return(
            <span key={index}>{stars >= index + 1 ? <BsStarFill className='star-icon'/> : stars >= number ? <BsStarHalf className='star-icon'/> : <BsStar className='star-icon'/>}</span>
        )
    })
  return (
    <div className='star'>
        {StartRating}
        <p>({reviews} customers reviews)</p>
    </div>
  )
}

export default Star