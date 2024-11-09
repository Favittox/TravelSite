import React from 'react'

export default function InputField() {
  return (
    <div className='lower-section'>
      <div className='inputdiv'>
        <label className='labelfoinput'>
          Your Destination
          <input type='text' className='input' placeholder='Thailand'/>
          </label>
          </div>
      <div className='inputdiv'>
        <label className='labelfoinput'>
          Check in
          <input type='text' className='input' placeholder='01-26-22'/>
          </label>
          </div>
      <div className='inputdiv'>
        <label className='labelfoinput'>
          Check out<input type='text' className='input' placeholder='01-30-22'/>
          </label>
          </div>
      <div className='inputdiv'>
        <label className='labelfoinput'>
          Child
          <input type='number' className='input' placeholder='2'/>
          </label></div>
      <div className='inputdiv'>
        <label className='labelfoinput'>
          Adult
          <input type='number' className='input' placeholder='3'/>
          </label>
          </div>
      <button className='book-now'>Book now</button>
    </div>
  )
}
