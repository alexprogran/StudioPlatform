import style from './ButtonSubmit.module.css';
import PropTypes from 'prop-types';

function ButtonSubmit({type, text}) {
    return <>
    <button className={style.btn} type={type}>{text}</button>    
    </>
}
export default ButtonSubmit

ButtonSubmit.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
}