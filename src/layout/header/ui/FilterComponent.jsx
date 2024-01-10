import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const FilterComponent = () => {
  const handleInputChange = async () => {
    try {
      let { data } = await axios.get("/cards");

      localStorage.setItem("token", data);
      const decoded = jwtDecode(data);
      console.log("decoded", decoded);

      decoded.filter((name) => name === decoded.title);
    } catch (err) {
      console.log("err from axios", err);
      localStorage.clear();
    }
  };

  // const handleInputChange = () => {};

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={handleInputChange}
      />
    </Search>
  );
};

export default FilterComponent;
