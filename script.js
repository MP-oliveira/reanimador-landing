// Sistema de descoberta interativa para Reanimador
document.addEventListener('DOMContentLoaded', function() {
    const discoveryElements = document.querySelectorAll('.discovery-element');
    const contentPanels = document.querySelectorAll('[data-target]');
    
    // Função para mostrar conteúdo específico
    function showContent(target) {
        // Esconder todos os conteúdos
        contentPanels.forEach(panel => {
            panel.classList.add('content-hidden');
        });
        
        // Mostrar o conteúdo correspondente
        const targetPanel = document.querySelector(`[data-target="${target}"]`);
        if (targetPanel) {
            targetPanel.classList.remove('content-hidden');
        }
    }
    
    // Adicionar eventos de hover aos elementos
    discoveryElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const content = this.getAttribute('data-content');
            showContent(content);
            
            // Adicionar efeito visual ao elemento ativo
            discoveryElements.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
        
        element.addEventListener('mouseleave', function() {
            // Manter o último conteúdo visível por um tempo
            setTimeout(() => {
                if (!document.querySelector('.discovery-element:hover')) {
                    // Se nenhum elemento estiver sendo hovered, mostrar o primeiro
                    showContent('journey');
                    discoveryElements.forEach(el => el.classList.remove('active'));
                }
            }, 500);
        });
    });
    
    // Mostrar o primeiro conteúdo por padrão
    showContent('journey');
    
    // Adicionar classe CSS para elemento ativo
    const style = document.createElement('style');
    style.textContent = `
        .discovery-element.active {
            transform: scale(1.15) !important;
            box-shadow: 0 15px 40px rgba(212, 184, 94, 0.4) !important;
            background: rgba(255, 255, 255, 1) !important;
        }
        
        .discovery-element.active .element-glow {
            opacity: 1 !important;
        }
        
        .discovery-element.active .element-icon {
            transform: scale(1.2) !important;
        }
    `;
    document.head.appendChild(style);
});

// Sistema de livro interativo para Preview
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const currentPageSpan = document.querySelector('.current-page');
    let currentPageIndex = 0;
    
    // Função para mostrar página específica
    function showPage(index) {
        // Remover classe active de todas as páginas
        pages.forEach(page => page.classList.remove('active'));
        
        // Adicionar classe active na página atual
        if (pages[index]) {
            pages[index].classList.add('active');
            currentPageIndex = index;
            currentPageSpan.textContent = index + 1;
            
            // Atualizar botões
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === pages.length - 1;
        }
    }
    
    // Event listeners para os botões
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPageIndex > 0) {
                showPage(currentPageIndex - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentPageIndex < pages.length - 1) {
                showPage(currentPageIndex + 1);
            }
        });
    }
    
    // Event listeners para navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentPageIndex > 0) {
            showPage(currentPageIndex - 1);
        } else if (e.key === 'ArrowRight' && currentPageIndex < pages.length - 1) {
            showPage(currentPageIndex + 1);
        }
    });
    
    // Event listeners para touch/swipe (mobile)
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Verificar se é um swipe horizontal
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0 && currentPageIndex < pages.length - 1) {
                // Swipe para esquerda - próxima página
                showPage(currentPageIndex + 1);
            } else if (diffX < 0 && currentPageIndex > 0) {
                // Swipe para direita - página anterior
                showPage(currentPageIndex - 1);
            }
        }
        
        startX = 0;
        startY = 0;
    });
    
    // Mostrar primeira página por padrão
    showPage(0);
});
