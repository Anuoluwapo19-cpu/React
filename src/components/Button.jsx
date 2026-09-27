import styles from './Button.module.css';

const Button = (props) => {
    return (
        
        <button className={`${props.className} ${styles.button}`}>
            <span>{props.children}</span>
            {props.renderIcon !== false ? (
              <div className={styles.buttonIcon}>-</div>
            ) : null}
        </button>
        
    );
};

export { Button };