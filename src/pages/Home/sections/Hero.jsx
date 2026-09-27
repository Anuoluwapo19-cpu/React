import styles from './Hero.module.css';

const Hero = () => {
    return (
        
          <section className={styles.hero}>
            <div className={styles.left}>
        <h1>HI, I AM RAJI ANUOLUWAPO.</h1>
        <p>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
        <div className={styles.btnContainer}>
            <a href="" className={styles.heroBtn}>CONTACT ME</a>
            </div>
      
        </div>
        <div className={styles.right}>
            <img src="../images/image.png" alt="" />
        </div>
        </section>
        
    );
};
 export default Hero;
