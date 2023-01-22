import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_COLUMN", payload: { title, icon } });
    setTitle("");
    setIcon("");
  };

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div>
        <span>Title:</span>
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <span>Icon:</span>
        <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      </div>
      <div>
        <Button>Add column</Button>
      </div>
    </form>
  );
};

export default ColumnForm;
