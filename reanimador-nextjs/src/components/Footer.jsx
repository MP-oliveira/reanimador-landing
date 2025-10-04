import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          © Verzza Marketing
        </p>
      </div>
    </footer>
  );
};

export default Footer;
