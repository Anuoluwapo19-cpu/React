import styles from './Project.module.css';

const Project = () => {
    return (
        // FEATURED PROJECT
        <section id="work" className={styles.project}>

        <div className={styles.proHeading}>
            <h2>FEATURED PROJECTS</h2>
            <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
        </div>

        <div className={styles.cardContainer}>

            /* CARD1 */

            <div className={styles.card}>
                <div className={styles.left}>

                    <p>Conceptual Work</p>

                    <img src="../images/log1.png" alt="" />

                </div>
                <div className={styles.right}>
                    <h3>Promotional landing page for our favorite show</h3>
                    <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>

                    <div className={styles.info}>
                        <h5>PROJECT INFO</h5>
                        <p>Year <span>2023</span></p>
                        <p>Role <span>Front-end Developer</span></p>
                    </div>

                    <div className={styles.links}>
                      <div className={styles.linksMenu}>
                        <a href="#">LIVE DEMO</a>
                         <img src="../images/icon1.png" alt="" />
                        </div>

                        <div className={styles.linksMenu}>
                            <a href="#">SEE ON GITHUB</a>
                            <img src="../images/icon2.svg.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            /* CARD2 */

            <div className={styles.card}>
                 <div className={styles.left}>

                    <img src="../images/image 9.png" alt="" />

                </div>
                <div className={styles.right}>
                    
                   <h2>Blog site for World News</h2>
                   <p>Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.</p>

                   <div className={styles.info}>
                        <h5>PROJECT INFO</h5>
                        <p>Client <span>World News</span></p>
                        <p>Year <span>2022</span></p>
                        <p>Role <span>Front-end Developer</span></p>
                    </div>


                    <div className={styles.links}>
                     <div className={styles.linksMenu}>
                        <a href="#">LIVE DEMO</a>
                         <img src="../images/icon1.png" alt="" />
                        </div>
                        </div>

                    </div>

                   
                    
                </div>
              
              /* CARD3 */

            <div className={styles.card}>
                 <div className={styles.left}>

                    <p>Challenge</p>

                    <img src="../images/image 10.png" alt="" />

                </div>
                <div className={styles.right}>

                    <h3>Blog site for World News</h3>
                    <p>Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.</p>

                     <div className={styles.info}>
                        <h5>PROJECT INFO</h5>
                        <p>Year <span>2022</span></p>
                        <p>Role <span>Front-end Developer</span></p>
                    </div>
                    
                    <div className={styles.links}>
                    <div className={styles.linksMenu}>
                        <a href="#">LIVE DEMO</a>
                            <img src="../images/icon1.png" alt="" />
                            </div>
                            <div className={styles.linksMenu}>
                                <a href="#">SEE ON GITHUB</a>
                                <img src="../images/icon2.svg.png" alt="" />
                            </div>
                    </div>
                    
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Project;