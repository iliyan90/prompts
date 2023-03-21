import React, { useState } from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import './footer.css' 
const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='footer alignColumnCenter p20'>
        <h3 className='textLG p10-0'>This demo copy of promptbase is created by <a className='textW' href="http://itarashev.rf.gd/" target={'_blank'} rel="noreferrer">I.Tarashev</a></h3>
        <h3 className='textLG p10-0'>Here is orgiginal site <a className='textW' href="https://promptbase.com/" target={'_blank'} rel="noreferrer">PromptBase</a></h3>
        <div className='textW fz24 alignFlex'>More info about the tools built it === <button onClick={()=> setOpen(true)}>OPEN MODAL</button></div>
        <div className={ open  ? 'modal-active' : 'modal'}>
            <button onClick={() => setOpen(false)}>CLOSE THE MODAL</button>
            <div className='inners'>

            <h3 className='textW'>This site is built with tools: </h3>
            <h4 className="textW">React</h4>
            <h4 className="textW">React-slick</h4>
            <h4 className="textW">React-router-dom</h4>
            <h4 className="textW">Styling CSS</h4>
            <h4 className="textW">The data is fetch from JSON file with useContext </h4>
            </div>
        </div>
        <div className='alignFlex p20-0'>
          <h3 className='textLG'>FAQ</h3>
          <h3 className='textLG'>Contact</h3>
          <h3 className='textLG'>Changelog</h3>
          <h3 className='textLG'>Privacy</h3>
        </div>
        <div className='textW alignFlex p20-0'>
          <AiOutlineInstagram size={24}/>
          <AiOutlineTwitter size={24}/>
        </div>
      
    </div>
  )
}

export default Footer