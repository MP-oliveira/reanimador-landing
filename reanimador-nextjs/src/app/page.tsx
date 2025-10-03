import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Reanimador - Uma aventura de fantasia onde as histórias ganham vida. Descubra o poder de dar vida às lendas." />
        <title>Reanimador - O Nascimento de um Herói | F.S. Turco</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css?v=20241203-39" />
      </head>
      <body>
        {/* Seção 1: E se as histórias que você amou pudessem ganhar vida? */}
        <section className="section-3">
          <div className="hero-background">
            <div className="floating-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="magical-border"></div>
          </div>
          
          <div className="container">
            <div className="book-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <path d="M8 7h8"/>
                <path d="M8 11h8"/>
                <path d="M8 15h5"/>
              </svg>
              <span>Nova Aventura Épica</span>
            </div>
            
            <div className="hero-content">
              <h3 className="section-subtitle">Reanimador - O Nascimento de um Herói</h3>
              <h1 className="section-title-large">E se as histórias que você amou pudessem ganhar vida?</h1>
              <p className="hero-description">Descubra um mundo onde a imaginação se torna realidade e cada página traz uma nova aventura à vida</p>
              
              <div className="hero-buttons">
                <a href="https://www.amazon.com.br/Reanimador-Nascimento-F-S-Turco-ebook/dp/B09CJKFTL9/ref=mp_s_a_1_1?crid=2BB8RNAY4PDDA&keywords=reanimador+o+nascimento&qid=1655736939&sprefix=reanimador+o+nascimento%2Caps%2C210&sr=8-1" className="btn btn-primary" target="_blank" rel="noopener">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                  Compre agora na Amazon
                </a>
                <a href="#preview" className="btn btn-secondary">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Ver Preview
                </a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="magical-book">
                <div className="book-cover">
                  <Image 
                    src="/assets/capa.png" 
                    alt="Reanimador - O Nascimento de um Herói" 
                    width={300}
                    height={450}
                    className="book-cover-image"
                  />
                </div>
                <div className="magical-glow"></div>
                <div className="floating-elements">
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Script src="/script.js" />
      </body>
    </html>
  )
}