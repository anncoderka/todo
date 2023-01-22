import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      props.action({ title: title, icon: icon });
      setTitle('');
      setIcon('');
    };

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
 
   return (
      <form className={styles.columnForm} onSubmit={handleSubmit}>
            <div>
                  <span>Title:</span>
                  <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                  <span>Icon:</span>
                  <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            </div>
            <div><Button>Add column</Button></div>
      </form>
	);
};

export default ColumnForm;
