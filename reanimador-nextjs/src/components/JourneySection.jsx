import styles from './JourneySection.module.css';

export default function JourneySection() {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyBackground}>
        <div className={styles.floatingElements}>
          <div className={`${styles.magicCircle} ${styles.circle1}`}></div>
          <div className={`${styles.magicCircle} ${styles.circle2}`}></div>
          <div className={`${styles.magicCircle} ${styles.circle3}`}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.journeyHeader}>
          <div className={styles.journeyBadge}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Uma História Épica</span>
          </div>
          <h2>Uma Jornada Além da Imaginação</h2>
          <div className={styles.journeyDivider}></div>
        </div>
        
        <div className={styles.journeyContent}>
          <div className={styles.journeyText}>
            <div className={`${styles.storyBlock} ${styles.storyBlock1}`}>
              <div className={styles.storyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p>Imagine um mundo onde algumas pessoas possuem diferentes habilidades. Algumas já vistas em livros e quadrinhos, outras inovadoras que você nunca pensou. <strong>Imaginou?</strong></p>
            </div>
            
            <div className={`${styles.storyBlock} ${styles.storyBlock2}`}>
              <div className={styles.storyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <path d="M8 7h8"/>
                  <path d="M8 11h8"/>
                  <path d="M8 15h5"/>
                </svg>
              </div>
              <p>Agora imagine um personagem que pode dar vida a todas as histórias que você leu quando era criança, trazer à tona seus maiores medos após ler um livro de terror, animar um quadro seja ele qual for. <strong>Essa é a história desse personagem.</strong></p>
            </div>
            
            <div className={`${styles.storyBlock} ${styles.storyBlock3}`}>
              <div className={styles.storyIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <p><strong>Richard Edward Jones</strong> nasce com um talento que você dificilmente conseguiria imaginar, ou mesmo idealizar o tamanho dele. Quando um homem consegue trazer qualquer coisa à vida, tudo se torna possível. E o mundo se tornará um lugar diferente, onde as lendas e histórias podem agora se tornar reais.</p>
            </div>
          </div>
          
          <div className={styles.journeyVisual}>
            <div className={styles.magicalBookContainer}>
              <div className={styles.bookGlow}></div>
              <div className={styles.magicalBook3d}>
                <div className={styles.bookCover3d}>
                  <div className={styles.bookTitle3d}>Reanimador</div>
                  <div className={styles.bookSubtitle3d}>O Nascimento de um Herói</div>
                  <div className={styles.bookAuthor3d}>F.S. Turco</div>
                </div>
              </div>
              <div className={styles.magicalParticles}>
                <div className={`${styles.particle} ${styles.particle1}`}></div>
                <div className={`${styles.particle} ${styles.particle2}`}></div>
                <div className={`${styles.particle} ${styles.particle3}`}></div>
                <div className={`${styles.particle} ${styles.particle4}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
