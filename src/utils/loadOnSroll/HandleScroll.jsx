import React, { useEffect } from "react";
import Card from "../../components/card/Card";

const HandleScroll = ({
  model,
  selectedModel,
  pageSize,
  search,
  setSearch,
  data,
}) => {

useEffect(() => {
    setSearch(data?.slice(0, pageSize));
    model.forEach((item) => {
      if (selectedModel === "All") {
        setSearch(data?.slice(0, pageSize));
      } else {
        const temp = data?.filter((pro) => pro.prompts === selectedModel);
        setSearch(temp);
      }
    });
  }, [selectedModel, pageSize]);

  const handleScorll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight + 100 >= scrollHeight) {
      const nextPage = search.length / pageSize + 1;
      const nextSearch = data?.slice(0, nextPage * pageSize);
      setSearch(nextSearch);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScorll);
    return () => window.removeEventListener("scroll", handleScorll);
  }, [search]);
  return (
    <div className="right-side-marketplace-items">
      {search?.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
};

export default HandleScroll;
