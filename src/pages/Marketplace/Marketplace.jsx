import React, { useContext, useEffect, useState } from "react";
import "./marketplace.css";
import { IoIosClose } from "react-icons/io";
import { ApiContext } from "../../context/ApiContext";
import HandleScroll from "../../utils/loadOnSroll/HandleScroll";
import { category } from "../../data/category";
const sort = ["Hottest", "Top", "Newest"];
export const model = [
  "All",
  "DALL-E",
  "Midjourney",
  "GPT-3",
  "ChatGPT",
  "PromptBase",
  "Stable Diffusion",
];

// TEMPLATE OF CHECKBOX MENU
export const tempChack = (list, selected, handleSelected, val) => (
  <div className="p10-0 market-list-items">
    <h6 className="fz16 p10-0">Sort by</h6>
    {list.map((item, i) => (
      <div key={i} className="alignFlexStart  p2-0">
        <input
          className="checkbox-mp"
          type="checkbox"
          name={`radio-checkbox-${i + val}`}
          id={`radio-checkbox-${i + val}`}
          value={item}
          checked={selected === item}
          onChange={() => handleSelected(item)}
        />
        <label className="fz14 bold" htmlFor={`radio-checkbox-${i + val}`}>
          {item}
        </label>
      </div>
    ))}
  </div>
);

const Marketplace = () => {
  const { data, selectedModel, setSelectedModel } = useContext(ApiContext);
  const [selectedSort, setSelectedSort] = useState("Hottest");
  const [selectedCatg, setSelectedCatg] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSelectedSort = (opt) => {
    setSelectedSort(opt);
  };
  const handleSelectedModel = (opt) => {
    setSelectedModel(opt);
  };
  const handleSelectedCatg = (opt) => {
    setSelectedCatg(opt);
  };

  const [search, setSearch] = useState([]);

  // first pass model, selectedMode, pageSize, search, setSearch, data
  const LoadData = (
    <HandleScroll
      model={model}
      selectedModel={selectedModel}
      pageSize={32}
      search={search}
      setSearch={setSearch}
      data={data}
    />
  );
  const selectItems = (list, selected, handleSelect) => (
      <select
        className="select-mobile-items"
        name="list"
        id="list"
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {list.map((item, i) => (
          <option key={i} label={item} id={item} value={item} />
        ))}
        <option value=""></option>
      </select>
  );
  return (
    <div className="marketplace alignCenter">
      <div className="flex1 p0-10 textW left-side-marketplace alignCenterColumn">
        <button
          className="btn-filter"
          onClick={() => {
            setSelectedSort("Hottest");
            setSelectedCatg("All");
            setSelectedModel("All");
          }}
        >
          Clear filters <IoIosClose size={18} />
        </button>
        {/* Mobile select options */}

        {selectItems(sort, selectedSort, handleSelectedSort)}
        {selectItems(model, selectedModel, handleSelectedModel)}
        {selectItems(category, selectedCatg, handleSelectedCatg)}

        {/* SORT BY FIRST CHECKBOX */}
        {tempChack(sort, selectedSort, handleSelectedSort, 0)}
        {tempChack(model, selectedModel, handleSelectedModel, 4)}
        {tempChack(category, selectedCatg, handleSelectedCatg, 14)}
      </div>
      <div className=" flex6 textW right-side-marketplace">
        <h2 className="fz22 ">
          {selectedSort} {"All" === selectedModel ? null : selectedModel}{" "}
          {selectedCatg === "All" ? null : selectedCatg} Prompts
        </h2>
        <div className="hr-line p20-0"></div>
        {LoadData}
      </div>
    </div>
  );
};

export default Marketplace;
