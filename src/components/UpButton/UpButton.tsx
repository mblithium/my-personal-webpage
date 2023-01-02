import styles from './UpButton.module.css'

function UpButton() {
    return(
        <div className={styles.toUpButton}>
            <p><a href="#header" title="Back to top">UP</a></p>
        </div>
    )
}
 
export default UpButton;