import styles from './PowerSection.module.css';

export default function PowerSection() {
  return (
    <section className={styles.powerSection}>
      <div className={styles.container}>
        <h2>O Poder da Reanimação</h2>
        
        <p className={styles.textLarge}>
          Descubra um protagonista único que possui a habilidade extraordinária de dar vida a personagens e criaturas das histórias mais épicas. Uma aventura que questiona os limites entre ficção e realidade, onde cada página virada pode mudar o destino de mundos inteiros.
        </p>
        
        <p className={styles.textLarge}>
          Prepare-se para uma experiência literária que vai despertar sua imaginação e fazer você questionar: e se você pudesse trazer seus heróis favoritos à vida?
        </p>
      </div>
    </section>
  );
}
