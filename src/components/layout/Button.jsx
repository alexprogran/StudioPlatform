import styles from './Button.module.css';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function Button({to, text}) {
    return <>
    <Link className={styles.btn} to={to}>
        {text}
    </Link>
    </>
}
export default Button 

Button.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string
}