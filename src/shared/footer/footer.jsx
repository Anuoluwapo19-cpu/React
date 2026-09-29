import { Button } from "../../components/Button";
import styles from './Footer.module.css';
import { useState } from "react";


    
function Footer() {

       const [form, setForm] = useState({
        name:'',
        email:'',
        subject:'',
        message:'',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
        
    }
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


     

                    <form onSubmit={handleSubmit} className={styles.contactForm}>

                <div className={styles.inputGroup}>

                <label htmlFor="name">   Name </label>
                <input type="text" value={form.name} id="name" name="name" placeholder="John Doe" required  onChange={(e) => setForm({ ...form, name: e.target.value })} />

            </div>


            <div className={styles.inputGroup}>

                <label htmlFor="email">  Email</label>

                <input type="email" value={form.email} id="email" name="email" placeholder="" required onChange={(e) => setForm({ ...form, email: e.target.value })} />

            </div>

            <div className={styles.inputGroup}>

                <label htmlFor="subject">  Subject</label>

                <input type="text" value={form.subject} id="subject" name="subject" placeholder="" required onChange={(e) => setForm({ ...form, subject: e.target.value })} />

            </div>



            <div className={styles.inputGroup}>

                <label htmlFor="message">  MESSAGE</label>

                <textarea id="message" value={form.message} name="message" rows="5" placeholder="" required  onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>

            </div>


            <button type="submit" className={styles.primaryBtn}>
                Submit
            </button>

           


           
        </form>

          
          <p className={styles.below}>© 2023 Robert Garcia</p>

              

        </footer>

    );
}


export default Footer;