import styles from './Input.module.css';
import PropTypes from 'prop-types';

function Input({name,text, type, placeholder, handleOnChange,value} ) {
    return <>
   <div className={styles.input_container}>
        <label htmlFor={name}>{text}:</label>
        <input 
        type={type} 
        id={name} 
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange} 
        value={value}
        />   
    </div> 
    </>
}
export default Input

Input.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string, 
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    value: PropTypes.string
}