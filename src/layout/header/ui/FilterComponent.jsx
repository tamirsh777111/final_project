import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { Fragment, useContext } from "react";
import Box from "@mui/material/Box";
import { FilterContext } from "../../../store/filterContext";
const FilterComponent = () => {
  const { filterInput, setFilterInput } = useContext(FilterContext);
  const handleInputChange = (e) => {
    setFilterInput(e.target.value);
    console.log(filterInput);
  };

  return (
    <Fragment>
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInputChange}
            value={filterInput}
          />
        </Search>
      </Box>
    </Fragment>
  );
};

export default FilterComponent;
