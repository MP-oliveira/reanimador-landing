import styles from './ChoiceSection.module.css';

export default function ChoiceSection() {
  return (
    <section className={styles.choiceSection}>
      <div className={styles.choiceBackground}>
        <div className={styles.choiceElements}>
          <div className={`${styles.magicStar} ${styles.star1}`}></div>
          <div className={`${styles.magicStar} ${styles.star2}`}></div>
          <div className={`${styles.magicStar} ${styles.star3}`}></div>
          <div className={`${styles.magicStar} ${styles.star4}`}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.choiceHeader}>
          <div className={styles.choiceBadge}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Escolha Inteligente</span>
          </div>
          <h2 className={styles.choiceTitle}>Por Que Escolher Reanimador</h2>
          <div className={styles.choiceDivider}></div>
        </div>
        
        <div className={styles.choiceContent}>
          <div className={styles.choiceVisual}>
            <div className={styles.magicalChoiceScene}>
              <div className={styles.choiceGem}>
                <div className={styles.gemCore}></div>
                <div className={styles.gemFacets}>
                  <div className={`${styles.facet} ${styles.facet1}`}></div>
                  <div className={`${styles.facet} ${styles.facet2}`}></div>
                  <div className={`${styles.facet} ${styles.facet3}`}></div>
                  <div className={`${styles.facet} ${styles.facet4}`}></div>
                </div>
                <div className={styles.gemGlow}></div>
              </div>
              <div className={styles.floatingBenefits}>
                <div className={`${styles.benefitFloat} ${styles.benefit1}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Originalidade</span>
                </div>
                <div className={`${styles.benefitFloat} ${styles.benefit2}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  <span>Emoção</span>
                </div>
                <div className={`${styles.benefitFloat} ${styles.benefit3}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2 0 0 1 4 19.5v-15A2.5 2 0 0 1 6.5 2z"/>
                  </svg>
                  <span>Nostalgia</span>
                </div>
                <div className={`${styles.benefitFloat} ${styles.benefit4}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                  <span>Aventura</span>
                </div>
              </div>
              <div className={styles.magicalConnections}>
                <div className={`${styles.connection} ${styles.connection1}`}></div>
                <div className={`${styles.connection} ${styles.connection2}`}></div>
                <div className={`${styles.connection} ${styles.connection3}`}></div>
                <div className={`${styles.connection} ${styles.connection4}`}></div>
              </div>
            </div>
          </div>
          
          <div className={styles.choiceGrid}>
            <div className={`${styles.choiceCard} ${styles.choiceCard1}`}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Originalidade</h3>
              <p>Uma premissa única que você não encontrará em nenhum outro lugar. Uma história que quebra paradigmas e redefine o que é possível na literatura fantástica.</p>
              <div className={styles.cardGlow}></div>
            </div>
            
            <div className={`${styles.choiceCard} ${styles.choiceCard2}`}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Emoção</h3>
              <p>Personagens cativantes e situações que vão fazer seu coração acelerar. Cada página é uma montanha-russa emocional que você não vai querer sair.</p>
              <div className={styles.cardGlow}></div>
            </div>
            
            <div className={`${styles.choiceCard} ${styles.choiceCard3}`}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2 0 0 1 4 19.5v-15A2.5 2 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h3>Nostalgia</h3>
              <p>Referências e homenagens às histórias que você cresceu amando. Uma viagem ao passado que desperta memórias e sentimentos especiais.</p>
              <div className={styles.cardGlow}></div>
            </div>
            
            <div className={`${styles.choiceCard} ${styles.choiceCard4}`}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Aventura</h3>
              <p>Ação constante e reviravoltas que vão manter você grudado na tela. Uma jornada épica que nunca perde o ritmo.</p>
              <div className={styles.cardGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
