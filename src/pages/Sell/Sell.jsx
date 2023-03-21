import React, { useState } from 'react'
import ProgressBar from '../../utils/progressbar/ProgressBar'
import './sell.css'
const Sell = () => {
  const [progress, setProgress] = useState(17);

  const handleProgress =() =>{
    setProgress(progress + 17)
    if(progress > 90) setProgress(17);
  }
  return (
    <div className='sell'>

    <ProgressBar progress={progress}  />
    <div className='hero alignFlex'>
      <div className='flex1 alignCenterColumn'>
        <h1 className="textW fz46 p20-0">Start selling your prompts</h1>
        <h3 className="textG p10-0">PromptBase is a marketplace for DALL·E, Midjourney, Stable Diffusion and GPT-3 Prompts.</h3>
        <h3 className="textG p10-0">You can sell your own prompts on PromptBase and start earning from your Prompt Engineering skills.</h3>
        <h3 className="textG p10-0">If your prompt is approved, you'll keep 80% of revenue from every sale of your prompt.</h3>
        <h3 className="textG p10-0">Get selling in just 2 minutes.</h3>
        <h3 className="textG p10-0">Get selling in just 2 minutes.</h3>
        <button className='btn-white m20-0' onClick={handleProgress}>Sell a prompt</button>
        <h3 className='textG p10-0'>Please read our <span className='underline'> prompt submission guidelines</span> before submitting your prompt so you understand what prompts can be sold on PromptBase.</h3>
      </div>
      <div className='flex1'>
      <iframe width="587" height="330" src="https://www.youtube.com/embed/QORw7FJ5lho" title="Make Money Selling Prompts on PromptBase" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
      </div>
    </div>
    </div>

  )
}

export default Sell