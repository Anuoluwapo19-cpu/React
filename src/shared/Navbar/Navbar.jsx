import { useState } from 'react';
import styles from './navbar.module.css';

const Navbar = () =>  {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigateToSection = (event, sectionId) => {
        event.preventDefault();
        setMenuOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', `#${sectionId}`);
    };

    return (
        <header>
            <nav className={styles.header}>
                <div className={styles.brand}>
                    <h1>RAJI ANUOLUWAPO</h1>
                </div>

                <button
                    className={styles.menuToggle}
                    type="button"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul
                    id="main-navigation"
                    className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}
                >
                    <li><a href="#work" onClick={(event) => navigateToSection(event, 'work')}>Work</a></li>
                    <li><a href="#about" onClick={(event) => navigateToSection(event, 'about')}>About</a></li>
                    <li><a href="#contact" onClick={(event) => navigateToSection(event, 'contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;