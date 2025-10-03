import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceBackground}>
        <div className={styles.readingElements}>
          <div className={`${styles.magicScroll} ${styles.scroll1}`}></div>
          <div className={`${styles.magicScroll} ${styles.scroll2}`}></div>
          <div className={`${styles.magicScroll} ${styles.scroll3}`}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.experienceHeader}>
          <div className={styles.experienceBadge}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Experiência Imersiva</span>
          </div>
          <h2 className={styles.experienceTitle}>Uma Experiência Única de Leitura</h2>
          <div className={styles.experienceDivider}></div>
        </div>
        
        <div className={styles.experienceContent}>
          <div className={styles.experienceVisual}>
            <div className={styles.magicalReadingScene}>
              <div className={styles.floatingBooks}>
                <div className={`${styles.magicBook} ${styles.magicBook1}`}>
                  <img src="/assets/capa.png" alt="Reanimador - Capa do Livro" className={styles.experienceBookImage}/>
                  <div className={styles.bookCoverGlow}></div>
                  <div className={styles.bookShadow}></div>
                </div>
                <div className={`${styles.magicBook} ${styles.magicBook2}`}>
                  <img src="/assets/capa.png" alt="Reanimador - Páginas do Livro" className={styles.experienceBookImage}/>
                  <div className={styles.bookCoverGlow}></div>
                  <div className={styles.bookShadow}></div>
                </div>
                <div className={`${styles.magicBook} ${styles.magicBook3}`}>
                  <img src="/assets/capa.png" alt="Reanimador - Detalhes do Livro" className={styles.experienceBookImage}/>
                  <div className={styles.bookCoverGlow}></div>
                  <div className={styles.bookShadow}></div>
                </div>
              </div>
              <div className={styles.magicalParticlesExperience}>
                <div className={`${styles.particleExperience} ${styles.particleExp1}`}></div>
                <div className={`${styles.particleExperience} ${styles.particleExp2}`}></div>
                <div className={`${styles.particleExperience} ${styles.particleExp3}`}></div>
                <div className={`${styles.particleExperience} ${styles.particleExp4}`}></div>
                <div className={`${styles.particleExperience} ${styles.particleExp5}`}></div>
              </div>
              <div className={styles.readingAura}>
                <div className={`${styles.auraCircle} ${styles.aura1}`}></div>
                <div className={`${styles.auraCircle} ${styles.aura2}`}></div>
                <div className={`${styles.auraCircle} ${styles.aura3}`}></div>
              </div>
              <div className={styles.magicalElements}>
                <div className={`${styles.magicLine} ${styles.line1}`}></div>
                <div className={`${styles.magicLine} ${styles.line2}`}></div>
                <div className={`${styles.magicLine} ${styles.line3}`}></div>
              </div>
            </div>
          </div>
          
          <div className={styles.experienceText}>
            <div className={styles.quoteContainer}>
              <div className={styles.quoteIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <blockquote className={styles.experienceQuote}>
                "Se você já sonhou em ver seus personagens favoritos ganhando vida, em testemunhar lendas antigas caminhando entre nós, e em descobrir o que acontece quando a imaginação se torna realidade, este livro foi escrito especialmente para você."
              </blockquote>
            </div>
            
            <div className={styles.experienceDescription}>
              <div className={styles.descriptionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <p>Uma obra que vai além da simples leitura - é uma <strong>experiência imersiva</strong> que conecta você com o poder transformador das histórias.</p>
            </div>
            
            <div className={styles.readingBenefits}>
              <div className={`${styles.benefit} ${styles.benefit1}`}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 12h3a2 2 0 0 1 2 2v1"/>
                    <path d="M11 12H8a2 2 0 0 0-2 2v1"/>
                  </svg>
                </div>
                <span>Imersão Total</span>
              </div>
              <div className={`${styles.benefit} ${styles.benefit2}`}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span>Magia das Palavras</span>
              </div>
              <div className={`${styles.benefit} ${styles.benefit3}`}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <span>Emoção Pura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
