import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section id="about" className={styles.aboutMe} >

            <div className={styles.left}>
             <h1>About me</h1>


            </div>
            
            <div className={styles.right}>

                <h3>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h3>

                <p>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>

                <div className={styles.aboutLink}>
                   <a href="#"> MORE ABOUT ME </a>
                </div>

            </div>
            </section>
    );
};

export default AboutMe;