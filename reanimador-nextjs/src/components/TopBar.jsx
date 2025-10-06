'use client';

import { useState, useEffect } from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Fecha o menu ao clicar em um link
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'journey', 'power', 'discovery', 'author', 'experience', 'choice', 'amazon', 'preview', 'final'];
      
      let currentActive = 'hero';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Para a seção final, usar uma lógica mais permissiva
          if (sections[i] === 'final') {
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              currentActive = sections[i];
              break;
            }
          } else {
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentActive = sections[i];
              break;
            }
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.topBar}>
      <div className={styles.navContainer}>
        {/* Menu Desktop */}
        <div className={styles.desktopMenu}>
          <button className={styles.navButton}>
            <span className={`${styles.navText}${activeSection === 'hero' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('hero')}>Início</span>
            <span className={`${styles.navText}${activeSection === 'journey' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('journey')}>Jornada</span>
            <span className={`${styles.navText}${activeSection === 'power' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('power')}>Poder</span>
            <span className={`${styles.navText}${activeSection === 'discovery' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('discovery')}>Descoberta</span>
            <span className={`${styles.navText}${activeSection === 'author' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('author')}>Autor</span>
            <span className={`${styles.navText}${activeSection === 'experience' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('experience')}>Experiência</span>
            <span className={`${styles.navText}${activeSection === 'choice' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('choice')}>Escolher</span>
            <span className={`${styles.navText}${activeSection === 'amazon' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('amazon')}>Amazon</span>
            <span className={`${styles.navText}${activeSection === 'preview' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('preview')}>Preview</span>
            <span className={`${styles.navText}${activeSection === 'final' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('final')}>Comece hoje</span>
          </button>
        </div>

        {/* Menu Mobile - Hambúrguer */}
        <div className={styles.mobileMenu}>
          <button className={`${styles.hamburgerButton}${isMenuOpen ? ` ${styles.active}` : ''}`} onClick={toggleMenu}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
          
          <div className={`${styles.mobileDropdown}${isMenuOpen ? ` ${styles.open}` : ''}`}>
            <span className={`${styles.navText}${activeSection === 'hero' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('hero')}>Início</span>
            <span className={`${styles.navText}${activeSection === 'journey' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('journey')}>Jornada</span>
            <span className={`${styles.navText}${activeSection === 'power' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('power')}>Poder</span>
            <span className={`${styles.navText}${activeSection === 'discovery' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('discovery')}>Descoberta</span>
            <span className={`${styles.navText}${activeSection === 'author' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('author')}>Autor</span>
            <span className={`${styles.navText}${activeSection === 'experience' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('experience')}>Experiência</span>
            <span className={`${styles.navText}${activeSection === 'choice' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('choice')}>Escolher</span>
            <span className={`${styles.navText}${activeSection === 'amazon' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('amazon')}>Amazon</span>
            <span className={`${styles.navText}${activeSection === 'preview' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('preview')}>Preview</span>
            <span className={`${styles.navText}${activeSection === 'final' ? ` ${styles.active}` : ''}`} onClick={() => scrollToSection('final')}>Comece hoje</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
