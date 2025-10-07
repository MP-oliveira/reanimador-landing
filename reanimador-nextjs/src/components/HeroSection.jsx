import Image from 'next/image'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.floatingParticles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
        <div className={styles.magicalBorder}></div>
      </div>
      
      <div className={styles.heroContainer}>
        <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.bookBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M8 7h8"/>
              <path d="M8 11h8"/>
              <path d="M8 15h5"/>
            </svg>
            <span>Fantasia & Aventura</span>
          </div>
          
          <div className={styles.titleContainer}>
            <h3 className={styles.sectionSubtitle}>Reanimador</h3>
            <h4 className={styles.bookSubtitle}>O Nascimento de um Herói</h4>
          </div>
          <h1 className={styles.sectionTitleLarge}>E se as histórias que você amou pudessem ganhar vida?</h1>
          <p className={styles.heroDescription}>Descubra um mundo onde a imaginação se torna realidade e cada página traz uma nova aventura à vida</p>
          
          <div className={styles.heroButtons}>
            <a href="https://www.amazon.com.br/Reanimador-Nascimento-F-S-Turco-ebook/dp/B09CJKFTL9/ref=mp_s_a_1_1?crid=2BB8RNAY4PDDA&keywords=reanimador+o+nascimento&qid=1655736939&sprefix=reanimador+o+nascimento%2Caps%2C210&sr=8-1" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener">
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Compre agora na Amazon
            </a>
            <a href="#preview" className={`${styles.btn} ${styles.btnSecondary}`}>
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21 5,3"/>
              </svg>
              Ver Preview
            </a>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.magicalBook}>
            <div className={styles.bookCover}>
              <Image 
                src="/assets/capa.png" 
                alt="Reanimador - O Nascimento de um Herói" 
                width={360}
                height={499}
                className={styles.bookCoverImage}
                priority
                quality={100}
                unoptimized
              />
            </div>
            <div className={styles.magicalGlow}></div>
            <div className={styles.floatingElements}>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
              <div className={styles.sparkle}></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
