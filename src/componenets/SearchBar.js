import { SearchBarStyled } from "../styles";
const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="search by perfume name"
      onChange={(event) => props.setQuerry(event.target.value)}
    />
  );
};

export default SearchBar;
