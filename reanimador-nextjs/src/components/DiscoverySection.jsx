import styles from './DiscoverySection.module.css';

export default function DiscoverySection() {
  return (
    <section className={styles.discoverySection}>
      <div className={styles.discoveryBackground}>
        <div className={styles.magicalParticles}>
          <div className={`${styles.particle} ${styles.particle1}`}></div>
          <div className={`${styles.particle} ${styles.particle2}`}></div>
          <div className={`${styles.particle} ${styles.particle3}`}></div>
          <div className={`${styles.particle} ${styles.particle4}`}></div>
          <div className={`${styles.particle} ${styles.particle5}`}></div>
          <div className={`${styles.particle} ${styles.particle6}`}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.discoveryHeader}>
          <div className={styles.discoveryBadge}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Descobertas Inesperadas</span>
          </div>
          <h1>O Que Você Vai Encontrar Neste Livro</h1>
          <div className={styles.discoveryDivider}></div>
          <p className={styles.discoverySubtitle}>Passe o mouse sobre os elementos para descobrir os segredos que aguardam</p>
        </div>
        
        <div className={styles.interactiveDiscovery}>
          <div className={styles.centralHub}>
            <div className={styles.hubCore}>
              <div className={styles.coreGlow}></div>
              <div className={styles.coreText}>
                <span className={styles.coreTitle}>REANIMADOR</span>
                <span className={styles.coreSubtitle}>O Livro</span>
              </div>
              <div className={styles.corePulse}></div>
            </div>
          </div>
          
          <div className={styles.discoveryOrbits}>
            <div className={`${styles.orbit} ${styles.orbit1}`}>
              <div className={`${styles.discoveryElement} ${styles.element1}`} data-content="journey">
                <div className={styles.elementIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <path d="M8 7h8"/>
                    <path d="M8 11h8"/>
                    <path d="M8 15h5"/>
                  </svg>
                </div>
                <div className={styles.elementGlow}></div>
              </div>
            </div>
            
            <div className={`${styles.orbit} ${styles.orbit2}`}>
              <div className={`${styles.discoveryElement} ${styles.element2}`} data-content="hero">
                <div className={styles.elementIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className={styles.elementGlow}></div>
              </div>
            </div>
            
            <div className={`${styles.orbit} ${styles.orbit3}`}>
              <div className={`${styles.discoveryElement} ${styles.element3}`} data-content="universe">
                <div className={styles.elementIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className={styles.elementGlow}></div>
              </div>
            </div>
            
            <div className={`${styles.orbit} ${styles.orbit4}`}>
              <div className={`${styles.discoveryElement} ${styles.element4}`} data-content="fantasy">
                <div className={styles.elementIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    <path d="M12 7v6"/>
                    <path d="M12 17h.01"/>
                  </svg>
                </div>
                <div className={styles.elementGlow}></div>
              </div>
            </div>
          </div>
          
          <div className={styles.discoveryPanel}>
            <div className={styles.panelContent}>
              <div className={styles.contentJourney} data-target="journey">
                <div className={styles.contentHeader}>
                  <div className={styles.contentIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  </div>
                  <h3>Jornada Épica</h3>
                </div>
                <p>Uma aventura de fantasia e mistério que vai prender você da primeira à última página. Cada capítulo revela novos segredos e desafios que testarão os limites da imaginação.</p>
                <div className={styles.contentStats}>
                  <div className={styles.statItem}>25+ Capítulos</div>
                  <div className={styles.statItem}>400+ Páginas</div>
                  <div className={styles.statItem}>Múltiplas Reviravoltas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
