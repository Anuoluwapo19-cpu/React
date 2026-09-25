import styles from './navbar.module.css';

const Navbar = () =>  {
    return (
        <header>
            <nav className={styles.header}>
            <div>
                <h1>RAJI ANUOLUWAPO</h1>
            </div>
            
            <ul>
              <a href="#">Work</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </ul>
            </nav>
        </header>
    );
};

export default Navbar;