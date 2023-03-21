import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import Slide from '../../components/slide/Slide';
import { ApiContext } from '../../context/ApiContext';
import { shuffleArr } from '../../utils/shuffle/shuffleArr';
import Spinner from '../../utils/spinner/Spinner'
import './hire.css'
const Hire = () => {
  const {users} = useContext(ApiContext);

  const [isLoading, setIsLoading] = useState(true);
  const [sliceUsers, setSliceUsers] = useState([]);
  const [getUsers, setGetUsers] = useState([]);
  const [midjourney, setMidjourney] = useState([]);
  const [diffusioin, setDiffusion] = useState([]);
  const [gtp3, setGtp3] = useState([]);

  useEffect(() =>{
    setSliceUsers(users?.slice(0,4));
    setGetUsers(users);
    setIsLoading(false);

  },[users]);

  useEffect(() =>{
    if(Array.isArray(users)) setMidjourney(shuffleArr([...users]))
  },[users]);
  useEffect(() =>{
    if(Array.isArray(midjourney)) setDiffusion(shuffleArr([...midjourney]));
  },[midjourney]);
  useEffect(() =>{
    if(Array.isArray(diffusioin)) setGtp3(shuffleArr([...diffusioin]))
  },[diffusioin])
  return (
    <div className='hire'>
      <div className="hero alignCenter p10">
        <div className="flex1 alignCenterColumn p10 left-hero">
          <h1 className="fz46 hero-title p20-0">
            Hire a Prompt Engineer
          </h1>
          <h4 className="textG fz24 p10-0">
          Commission custom prompts from top prompt engineers, save on time & API costs, become a prompt engineer.
          </h4>
          <div className="p20-0 hero-buttons alignCenter gap10">
            <button className="btn-white">Hire a engineer</button>
            <button className="btn-dark">Become a engineer</button>
          </div>
        </div>
        <div className="flex1 alignCenterColumn right-hero">
          <div className=" gap10 screenMdUp cards4 relative">
            {isLoading ? (
              <Spinner/>
            ) : (
              sliceUsers?.map((item, i) => <Card key={i} item={item} />)
            )}
          </div>
          
        </div>
      </div>
            <Slide title='Top DALL-E Prompt Engineer' items={getUsers} isLoading={isLoading}/>
            <Slide title='Top Midjourney Prompt Engineer' items={midjourney} isLoading={false}/>
            <Slide title='Top Stable Diffusion Prompt Engineer' items={diffusioin} isLoading={false}/>
            <Slide title='Top GPT-3 Prompt Engineer' items={gtp3} isLoading={false}/>
    </div>
  )
}

export default Hire