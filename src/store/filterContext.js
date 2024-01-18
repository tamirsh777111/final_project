import React, { useState, createContext } from "react";

export const FilterContext = createContext();

const FilterProvider = (props) => {
  const [filterInput, setFilterInput] = useState("");

  const value = {
    filterInput,
    setFilterInput,
  };

  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
