import styles from './Inputs.module.css';
import PropTypes from 'prop-types';

function Inputs({ name,text, type, value, placeholder, handleOnChange,classDinamic}) {
    console.log(classDinamic)
    return <>
    <div className={styles.inputs_container}>
    <label htmlFor={name}>{text}:</label>    
    <input 
    className={styles[classDinamic]}
    id={name} 
    type={type} 
    placeholder={placeholder} 
    onChange={handleOnChange} 
    name={name} 
    value={value} />
    </div>
    </>
} 
export default Inputs

Inputs.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string, 
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    name: PropTypes.string, 
    value: PropTypes.string,
    classDinamic: PropTypes.string
}


