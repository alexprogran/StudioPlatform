import styels from './ProjectInforms.module.css'
import PropTypes from 'prop-types';

function Informs({title, text}) {
    return<>
   <div className={styels.informs_container}>
   <h3>{title}</h3>
   <p>{text}</p>
   </div>
    
    </>
}
export default Informs

Informs.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}