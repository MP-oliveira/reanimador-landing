import styles from './AmazonSection.module.css';
import Image from 'next/image';

export default function AmazonSection() {
  return (
    <section className={styles.amazonSection}>
      <div className={styles.amazonBackground}></div>
      
      <div className={styles.container}>
        <h2 className={styles.amazonTitle}>Disponível Agora na Amazon</h2>
        
        <div className={`${styles.twoColumn} ${styles.rightImage}`}>
          <div className={`${styles.column} ${styles.textColumn}`}>
            <h3>Formato E-book</h3>
            
            <p>Tenha acesso instantâneo à sua cópia digital e comece a ler imediatamente. Compatível com todos os dispositivos Kindle e aplicativos de leitura.</p>
            
            <p>Aproveite a praticidade do formato digital e leve sua aventura para onde quiser - seja no celular, tablet ou e-reader.</p>
            
            <a 
              href="https://www.amazon.com.br/Reanimador-Nascimento-F-S-Turco-ebook/dp/B09CJKFTL9/ref=mp_s_a_1_1?crid=2BB8RNAY4PDDA&keywords=reanimador+o+nascimento&qid=1655736939&sprefix=reanimador+o+nascimento%2Caps%2C210&sr=8-1" 
              className={`${styles.btn} ${styles.btnGold}`} 
              target="_blank" 
              rel="noopener"
            >
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              Baixe agora
            </a>
          </div>
          
          <div className={`${styles.column} ${styles.imageColumn}`}>
            <div className={`${styles.imagePlaceholder} ${styles.ebook}`}>
              <div className={styles.ebookImageContainer}>
                <Image 
                  src="/assets/ebook.png" 
                  alt="E-book Reanimador" 
                  className={styles.ebookImage}
                  width={280}
                  height={400}
                  quality={100}
                  unoptimized
                />
                <div className={styles.magicalEffect}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
