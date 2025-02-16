import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({type, text}) {
    return <>
    <button className={styles.btn} type={type}>{text}</button>
    </>
}
export default Button

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
}