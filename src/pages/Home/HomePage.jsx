import { Button } from '../../components/Button';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import Hero from './sections/Hero';
import Project from './sections/Project';
import AboutMe  from './sections/AboutMe';
import styles from './HomePage.module.css'
const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Hero />
        <Project />
        <AboutMe/>
        {/* <Button className={styles.homeButton} renderIcon={true}>
            Contact Me
            </Button> */}
            <Footer/>

        </>
    );
}; 

export default Homepage;