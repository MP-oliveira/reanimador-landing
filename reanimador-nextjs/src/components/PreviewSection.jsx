'use client';

import { useState, useEffect } from 'react';
import styles from './PreviewSection.module.css';

export default function PreviewSection() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // Página 1 como default
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  // Função para mostrar página específica
  const showPage = (index) => {
    console.log('Mostrando página:', index);
    setCurrentPageIndex(index);
  };

  // Função para abrir modal
  const openPageModal = (imageSrc) => {
    console.log('Opening modal with:', imageSrc);
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  // Função para fechar modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navegação com teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          closeModal();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <section className={styles.sectionPreview} id="preview">
        <div className={styles.previewBackground}>
          <div className={styles.magicalAtmosphere}>
            <div className={styles.floatingWord1}>MAGIA</div>
            <div className={styles.floatingWord2}>AVENTURA</div>
            <div className={styles.floatingWord3}>MISTÉRIO</div>
            <div className={styles.floatingWord4}>PODER</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.previewHeader}>
            <div className={styles.previewBadge}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <path d="M8 7h8"/>
                <path d="M8 11h8"/>
                <path d="M8 15h5"/>
              </svg>
              <span>Primeiros Passos</span>
            </div>
            <h2>Preview do Livro</h2>
            <div className={styles.previewDivider}></div>
            <p className={styles.previewSubtitle}>Toque nas páginas para descobrir os segredos que aguardam</p>
          </div>
          
          <div className={styles.interactiveBookContainer}>
            <div className={styles.bookStand}>
              <div className={styles.bookBase}></div>
              <div className={styles.bookSpine}></div>
            </div>
            
            <div className={styles.magicalBook}>
              
              <div className={styles.bookPagesContainer}>
                <div className={`${styles.page} ${styles.page3} ${currentPageIndex === 0 ? styles.active : ''}`} data-content="page3">
                  <div className={styles.pageContent}>
                    <img src="/assets/pag3.jpeg" alt="Página 3 do Livro Reanimador" className={styles.pageImage} onClick={() => openPageModal('/assets/pag3.jpeg')} />
                    <div className={styles.clickHint}>
                      <div className={styles.zoomIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.35-4.35"/>
                          <path d="M8 11h6"/>
                          <path d="M11 8v6"/>
                        </svg>
                      </div>
                      <span className={styles.clickText}>Clique para ampliar</span>
                    </div>
                  </div>
                  <div className={styles.pageGlow}></div>
                </div>
                
                <div className={`${styles.page} ${styles.page2} ${currentPageIndex === 1 ? styles.active : ''}`} data-content="page2">
                  <div className={styles.pageContent}>
                    <img src="/assets/pag2.jpeg" alt="Página 2 do Livro Reanimador" className={styles.pageImage} onClick={() => openPageModal('/assets/pag2.jpeg')} />
                    <div className={styles.clickHint}>
                      <div className={styles.zoomIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.35-4.35"/>
                          <path d="M8 11h6"/>
                          <path d="M11 8v6"/>
                        </svg>
                      </div>
                      <span className={styles.clickText}>Clique para ampliar</span>
                    </div>
                  </div>
                  <div className={styles.pageGlow}></div>
                </div>
              </div>
              
              <div className={styles.bookControls}>
                <button 
                  className={`${styles.pageBtn} ${styles.prevBtn}`}
                  onClick={() => currentPageIndex > 0 && showPage(currentPageIndex - 1)}
                  disabled={currentPageIndex === 0}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"/>
                  </svg>
                  <span>Anterior</span>
                </button>
                <div className={styles.pageIndicator}>
                  <span className={styles.currentPage}>{currentPageIndex + 1}</span>
                  <span className={styles.separator}>/</span>
                  <span className={styles.totalPages}>2</span>
                </div>
                <button 
                  className={`${styles.pageBtn} ${styles.nextBtn}`}
                  onClick={() => currentPageIndex < 1 && showPage(currentPageIndex + 1)}
                  disabled={currentPageIndex === 1}
                >
                  <span>Próxima</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.pageModal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={modalImageSrc} alt="Página do livro em tamanho grande" className={styles.modalImage} />
          </div>
        </div>
      )}
    </>
  );
}