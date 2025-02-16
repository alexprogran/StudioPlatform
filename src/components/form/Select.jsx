import styles from './Select.module.css';
import PropTypes from 'prop-types';

function Select({name,text, options ,handleOnChange, value} ) {
    return <>
    <div className={styles.select_container}>
        <label  htmlFor={name}>{text}</label>
        <select 
        id={name}
        name={name}
        onChange={handleOnChange}
        value={value || ''}        
        >
            <option>Selecione o serviço</option>
            {options.map((option) => (
                <option key={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
    </>
}
export default Select

Select.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    options: PropTypes.array, 
    handleOnChange: PropTypes.func,
    value: PropTypes.string,
}