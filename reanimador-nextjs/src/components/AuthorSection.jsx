import styles from './AuthorSection.module.css';

export default function AuthorSection() {
  return (
    <section className={styles.authorSection}>
      <div className={styles.container}>
        <h2>Sobre F.S. Turco</h2>
        
        <div className={styles.twoColumn}>
          <div className={styles.imageColumn}>
            <div className={styles.imagePlaceholder}>
              <img 
                src="/assets/autor.jpg" 
                alt="F.S. Turco - Autor de Reanimador" 
                className={styles.authorPhotoSimple}
              />
            </div>
          </div>
          
          <div className={styles.textColumn}>
            <p>
              F.S. Turco é um criador de conteúdo, escritor e músico apaixonado por fantasia e cultura pop. 
              Com uma imaginação fértil e um amor profundo pelas histórias que marcaram gerações, ele decidiu 
              criar sua própria contribuição para o universo da literatura fantástica.
            </p>
            
            <p>
              Inspirado pelos grandes mestres do gênero e pela magia que existe em dar vida a novos mundos 
              através das palavras, Turco traz para os leitores uma obra que promete despertar a criança 
              interior de cada um.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
