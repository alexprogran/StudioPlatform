import styles from './ProjectSwitch.module.css';

function Switch() {
    return <>
    <label className={styles.checkbox_container} >
        <input type="checkbox" />
        <span></span>
    </label>
    </>
}

export default Switch