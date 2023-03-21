import React, { useContext, useEffect, useMemo, useState } from "react";
import Card from "../../components/card/Card";
import { ApiContext } from "../../context/ApiContext";
import "./mainpage.css";
import Slide from "../../components/slide/Slide";
import { Link } from "react-router-dom";
import Spinner from "../../utils/spinner/Spinner";
import { shuffleArr } from "../../utils/shuffle/shuffleArr"; 
export const generateImg = (<img
  width={"100%"}
  src="https://i.gyazo.com/c58d6b7349191f2feb476c29a0b485ae.jpg"
  alt=""
/>)

const MainPage = () => {
  const { data } = useContext(ApiContext);
  const [isLoading, setIsLoading] = useState(true);
  const [newPropts, setNewPrompts] = useState([]);
  const [hotPropts, setHotPrompts] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);
  const [midjourney, setMidjourney] = useState([]);
  const [gpt3, setGpt3] = useState([]);
  const [dall, setDall] = useState([]);
  const [stable, setStable] = useState([]);
  const [sliceData, setSliceData] = useState([]);
  
  useEffect(() =>{
    window.scrollTo(0,0);
  },[])

  const memoizedData = useMemo(() => data || [], [data]);

  useEffect(() => {
    if (memoizedData.length) {
      setIsLoading(false);
      setNewPrompts(shuffleArr([...memoizedData]));
    }
  }, [memoizedData]);
  
  useEffect(() => {
    const mid = data?.filter((item) => item.prompts === "Midjourney");
    const gpt = data?.filter((item) => item.prompts === "GPT-3");
    const dll = data?.filter((item) => item.prompts === "DALL-E");
    const stbl = data?.filter((item) => item.prompts === "Stable Diffusion");
    setMidjourney(mid);
    setGpt3(gpt);
    setDall(dll);
    setStable(stbl);
  }, [data]);

  useEffect(() => {
    if (newPropts.length) setHotPrompts(shuffleArr([...newPropts]));
  }, [newPropts]);

  useEffect(() => {
    if (hotPropts.length) setThisWeek(shuffleArr([...hotPropts]));
  }, [hotPropts]);

  useEffect(() => {
    if (thisWeek.length) setThisMonth(shuffleArr([...thisWeek]));
  }, [thisWeek]);

  const arr = [1, 2, 3, 4];
  useEffect(() =>{
    if (data && data.length > 0) {
      
      let temp = [];
      arr.forEach(() => {
        const rand = Math.round(Math.random() * data?.length);
        temp.push(data[rand]);
      });
      setSliceData(temp);
    }
  },[data])

  const logoComp = [
    "https://promptbase.com/assets/img/tc_logo2.png",
    "https://promptbase.com/assets/img/verge_logo.svg",
    "https://promptbase.com/assets/img/wired_logo.png",
    "https://promptbase.com/assets/img/fast_company_logo.png",
    "https://promptbase.com/assets/img/ft_logo.png",
    "https://promptbase.com/assets/img/atlantic_logo.svg",
    "https://promptbase.com/assets/img/yahoo_finance_logo.png",
    "https://promptbase.com/assets/img/wsj_logo.png",
  ];
  const browseMarketPlace = (
    <div className="alignFlex p20-0">
      <Link to={"/marketplace"}>
        <button className="btn-white">Browse Marketplace</button>
      </Link>
    </div>
  );

  
  return (
    <div className="main-page">
      <div className="hero alignCenter p10">
        <div className="flex1 alignCenterColumn p10 left-hero">
          <h1 className="fz46 hero-title">
            DALE-E, GPT-3, Midjourney, Stable Diffusion, ChatGPT
          </h1>
          <h1 className="textW p20-0 fz46">Prompt Marketplace</h1>
          <h4 className="textW fz24">
            Find top prompts, produce better results, save on API cost, sell you
            own prompts
          </h4>
          <div className="p20-0 hero-buttons alignCenter gap10">
            <Link to={'/marketplace'}>
            <button className="btn-white">Find a prompt</button>
            </Link>
            <button className="btn-dark">Sell a prompt</button>
          </div>
        </div>
        <div className="flex1 alignCenterColumn right-hero">
          <div className=" gap10 screenMdUp cards4 relative">
            {isLoading ? (
              <Spinner/>
            ) : (
              sliceData?.map((item, i) => <Card key={i} item={item} />)
            )}
          </div>
          <div className=" flex1 alignFlexColumn gap20 ">
            <h6 className="textG fz20">Featured in</h6>
            <div className="flexWrap gap20">
              {logoComp.map((item, i) => (
                <React.Fragment key={i}>
                  <img src={item} alt="" className="comp-img" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Here should be tabs */}
      <Slide isLoading={isLoading} title="Feactured Prompts" items={data} />
      <Slide isLoading={false} title="Hottest Prompts" items={hotPropts} />
      <Slide isLoading={false} title="New Prompts" items={newPropts} />
      {browseMarketPlace}
      <div className="what-is alignColumnCenter p20">
        <h1 className="fz46 p20-0">
          <span className="textW"> What is </span>
          <span className="hero-title">PromtBase</span>
        </h1>
        <h3 className="textG p10-0">
          Prompts are becoming a powerful new way of programming AI models like
          DALL·E, Midjourney & GPT-3.
        </h3>
        <h3 className="textG p10-0">
          However, it's hard to find good quality prompts online.
        </h3>
        <h3 className="textG p10-0">
          If you're good at prompt engineering, there's also no clear way to
          make a living from your skills.
        </h3>
        <h3 className="textG p10-0">
          PromptBase is a marketplace for buying and selling quality prompts
          that produce the best results, and save you money on API costs.
        </h3>
      </div>
      <Slide isLoading={isLoading} title="Most Popular Prompts This Week" items={thisWeek} />
      <Slide isLoading={false} title="Most Popular Prompts This Month" items={thisMonth} />
      {browseMarketPlace}
      <div className="hero alignCenter p20 gap20">
        <div className="flex1 alignCenterColumn">
          <h1 className="fz46 p20-0 textW">
            Earn from your Prompt Engineering skills
          </h1>
          <h3 className="textG p10-0">
            PromptBase is an early marketplace for DALL·E, Midjourney, Stable
            Diffusion & GPT-3 prompts.
          </h3>
          <h3 className="textG p10-0">
            Sell your prompts on PromptBase and earn from your prompt crafting
            skills.
          </h3>
          <h3 className="textG p10-0">
            Upload your prompt, connect with Stripe, and become a seller in just
            2 minutes.
          </h3>
          <button className="btn-white">Sell a Propmt</button>
        </div>
        <div className="flex1 alignColumnCenter">
          <iframe
            width="587"
            height="330"
            src="https://www.youtube.com/embed/QORw7FJ5lho"
            title="Make Money Selling Prompts on PromptBase"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Here should be tabs */}
      <Slide isLoading={isLoading} title="Newest Midjourney Prompts" items={midjourney} />
      <Slide isLoading={false} title="Newest GPT-3 Prompts" items={gpt3} />
      {browseMarketPlace}
      <div className="hero alignCenter p20 gap20">
        <div className="textw flex1 p20-0">
          <h1 className="p20-0 textW fz46">
            <span className="hero-title  p20-0">Generate Images </span>
            <span>directly in PromptBase</span>
          </h1>
          <h3 className="textG p10-0">
            Start prompt engineering instantly within PromptBase using Stable
            Diffusion.
          </h3>
          <h3 className="textG p10-0">
            Craft prompts and sell them on the marketplace.{" "}
          </h3>
          <h3 className="textG p10-0">
            Get 5 free generation credits every day.
          </h3>
          <button className="btn-white">Generate Images</button>
        </div>
        <div className="textw flex1 p20-0">
          {generateImg}
        </div>
      </div>
      {/* Here should be tabs */}
      <Slide isLoading={isLoading} title="Newest DALL-E Prompts" items={dall} />
      <Slide isLoading={false} title="Newest Stable Diffusion Prompts" items={stable} />
    </div>
  );
};

export default MainPage;
