import styles from './Button.module.css';
import PropTypes from 'prop-types';


function Button({type, text,classDinamic}) {
    return <>
    <div className={styles.container_btn}>
    <button className={`${styles.btn} ${styles[classDinamic]}`} type={type}>  
        {text}
    </button>

    </div>
    </>
}
export default Button

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    classDinamic: PropTypes.string,
}