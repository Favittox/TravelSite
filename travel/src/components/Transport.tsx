import React from 'react'
import hotelImage from '../image/firstimgs/hotel.png'
import flightImage from '../image/firstimgs/Flight 1.png'
import  carImage from '../image/firstimgs/car 1.png'
import shipImage from '../image/firstimgs/Ship 1.png'

export default function Transport() {
  return (
    <div className='up-section'>
        <div className='transportdiv'>
            <img src={hotelImage} className='hotelimg'/>
            <p className='hoteltxt'>hotel</p>
        </div>
        <div className='transportdiv'>
            <img src={flightImage} className='flightimg'/>
            <p className='flighttxt'>flight</p>
        </div>
        <div className='transportdiv'>
            <img src={carImage} className='carimg'/>
            <p className='cartxt'>car</p>
        </div>
        <div className='transportdiv'>
            <img src={shipImage} className='shipimg'/>
            <p className='shiptxt'>ship</p>
        </div>
    </div>
  )
}
