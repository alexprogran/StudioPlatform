import style from './Container.module.css';
import PropTypes from 'prop-types';



function Container({children, customClass})  {
    
    return <>
    <div className ={`${style.container} ${customClass}`}>        
        {children}
    </div>
    
    </>
}
export default Container

Container.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
}