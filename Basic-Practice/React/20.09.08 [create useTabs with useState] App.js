/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./App.css";

const content = [
  {
    tab: "Section1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  return {
    currnetItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

const App = () => {
  const { currnetItem, changeItem } = useTabs(0, content);
  return (
    <>
      {content.map((sectionId, idx) => (
        <button
          onClick={() => {
            changeItem(idx);
          }}
        >
          {sectionId.tab}
        </button>
      ))}
      <div>{currnetItem.content}</div>
    </>
  );
};

export default App;
