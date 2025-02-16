import styles from './inputs.module.css';
import PropTypes from 'prop-types';

function Inputs({ name,text, type, value, placeholder, handleOnChange}) {

    return <>
    <div className={styles.inputs_container}>
    <label htmlFor={name}>{text}:</label>
    <input 
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
}


