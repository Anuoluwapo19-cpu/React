import { Button } from "../../components/Button";
import styles from './Footer.module.css';

function Footer() {
    return (
       
        <footer id="contact" className={styles.footer}>

            <div className={styles.left}>
            <h2>Let’s connect</h2>

            <p>Say hello at <a href="#">robertgarcia@gmail.com</a></p>
            <p>For more info, here’s my <a href="#">my resume</a></p>

            <div className={styles.icon}>
                <img src="../images/icon5.svg.png" alt="" />
                <img src="../images/icon2.svg.png" alt="" />
                 <img src="../images/icon4.png" alt="" />
                 <img src="../images/icon3.svg.png" alt="" />
            </div>
           

            
            
            
            </div>

                    <form className={styles.contactForm}>

                <div className={styles.inputGroup}>

                <label htmlFor="name">   Name </label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />

            </div>


            <div className={styles.inputGroup}>

                <label htmlFor="email">  Email</label>

                <input type="email" id="email" name="email" placeholder="" required />

            </div>

            <div className={styles.inputGroup}>

                <label htmlFor="subject">  Subject</label>

                <input type="text" id="subject" name="subject" placeholder="" required />

            </div>



            <div className={styles.inputGroup}>

                <label htmlFor="message">  MESSAGE</label>

                <textarea id="message" name="message" rows="5" placeholder="" required></textarea>

            </div>


            <button type="submit" className={styles.primaryBtn}>
                Submit
            </button>

           


           
        </form>
          
          <p className={styles.below}>© 2023 Robert Garcia</p>

               {/* <Button className={styles.footerButton} renderIcon={false}> 
                Submit
            </Button>    */}

        </footer>
    );
}

export default Footer;