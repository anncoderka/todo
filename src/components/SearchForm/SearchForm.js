import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchString, updateSearchString } from "../../redux/store";
import { useSelector } from "react-redux";

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(getSearchString);
  const [searchValue, setSearchValue] = useState(searchString);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
