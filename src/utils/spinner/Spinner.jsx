import React from 'react'
import spinner from './spinner-white.svg'
import './spinner.css'
const Spinner = () => {
  return (
    <div className='spinner'>
        <img className='spinner-img' width={100} src={spinner} alt="" />
    </div>
  )
}

export default Spinner