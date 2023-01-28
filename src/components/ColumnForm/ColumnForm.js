import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from "react-redux";
import { addColumn } from "../../redux/columnsRedux";
import { useParams } from "react-router";

const ColumnForm = (props) => {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ listId, title, icon }));
    setTitle("");
    setIcon("");
  };

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
