import style from './Container.module.css';
import PropTypes from 'prop-types';



function Container({children, customClass})  {

    const customClasses = customClass
    ? customClass.split(' ').map(cls => style[cls]).join(' ')
    : '';
    
    return <>
    <div className ={`${style.container} ${customClasses}`}>

        
        {children}
    </div>
    
    </>
}
export default Container

Container.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
}