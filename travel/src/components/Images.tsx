import React from 'react'
import girlImage from "../image/secondimgs/girl.png";
import waterImage from "../image/secondimgs/water.png";

export default function Images() {
  return (
    <div>
        <img src={waterImage} className='water-image'/>
        <img src={girlImage} className='girl-image'/>
    </div>
  )
}
