import styles from './Button.module.css';
import PropTypes from 'prop-types';


function Button({type, text,classDinamic}) {
    return <>
    <button className={`${styles.btn} ${styles[classDinamic]}`} type={type}>{text}</button>
    </>
}
export default Button

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    classDinamic: PropTypes.string,
}