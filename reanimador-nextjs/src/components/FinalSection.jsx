import styles from './FinalSection.module.css';

const FinalSection = () => {
  return (
    <section className={styles.finalSection}>
      <div className={styles.container}>
        <h3 className={styles.sectionSubtitle}>Comece Sua Jornada Hoje</h3>
        <h1 className={styles.sectionTitle}>Não espere mais</h1>
        
        <p className={styles.textMedium}>
          Comece hoje sua jornada em um mundo onde a imaginação ganha vida, onde as histórias saltam das páginas e onde cada capítulo reserva uma surpresa extraordinária. Clique abaixo e garante já o seu exemplar na Amazon.
        </p>
        
        <p className={`${styles.textMedium} ${styles.emphasis}`}>
          O poder de dar vida às lendas está esperando por você.
        </p>
        
        <div className={styles.buttonGroup}>
          <a 
            href="https://www.amazon.com.br/Reanimador-Nascimento-F-S-Turco-ebook/dp/B09CJKFTL9/ref=mp_s_a_1_1?crid=2BB8RNAY4PDDA&keywords=reanimador+o+nascimento&qid=1655736939&sprefix=reanimador+o+nascimento%2Caps%2C210&sr=8-1" 
            className={`${styles.btn} ${styles.btnGold}`} 
            target="_blank" 
            rel="noopener"
          >
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M8 7h8"/>
              <path d="M8 11h8"/>
              <path d="M8 15h4"/>
            </svg>
            COMPRE AGORA NA AMAZON
          </a>
          
          <a 
            href="https://www.amazon.com.br/Reanimador-Nascimento-F-S-Turco-ebook/dp/B09CJKFTL9/ref=mp_s_a_1_1?crid=2BB8RNAY4PDDA&keywords=reanimador+o+nascimento&qid=1655736939&sprefix=reanimador+o+nascimento%2Caps%2C210&sr=8-1" 
            className={`${styles.btn} ${styles.btnOutline}`} 
            target="_blank" 
            rel="noopener"
          >
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Presente para alguém especial
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
