import React, { useState } from 'react'

const ImageSingle = ({image = [{url : ""}]}) => {
  const [mainimage, setMainimage] = useState(image[0])
  return (
    <div className='section'>
      <div className="grid-img">
      {image.map((curElem, index) => 
          {
            return (<img  src={curElem.url} alt={curElem.filename} key={index} className='img' onClick={() => setMainimage(curElem)} /> )
          }
        )}
      </div>
      <div className="main-screen">
        <img src={mainimage.url} alt={mainimage.filename} className='img-main'/>
      </div>
    </div>
  )
}

export default ImageSingle