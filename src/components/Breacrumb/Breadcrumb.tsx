import styles from "../Breacrumb/Breadcrumb.module.css";

function Breadcrumb(props:any) {
    return (
        <div id="breadcrumb" className={styles.breadcrumb}>
            {
                props.path.map((item:any, index:Number) => {
                    return <span className={styles.breadcrumbitem}>{item}</span>
                })
            }
        </div>
    );
}

export default Breadcrumb;