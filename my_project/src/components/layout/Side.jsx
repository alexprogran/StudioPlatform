import { FaClipboard, FaPen, FaHeart, FaShareAlt } from 'react-icons/fa';

import style from './Side.module.css';

function Side() {
    return <>
       <div className={style.side}>
        <ul className={style.list}>
            <li>
               <FaClipboard /> 
            </li>
            <li>
                <FaPen />
            </li>
            <li>
                <FaHeart />
            </li>
            <li>
                <FaShareAlt />
            </li>
        </ul>
       </div>
    </>
}
export default Side