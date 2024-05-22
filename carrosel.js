window.onload = () => {
    // Seleciona o container do carrossel
    const carousel = document.querySelector('.product-container');
  
    // Seleciona todas as imagens dentro do container
    const images = document.querySelectorAll('.product-container img');
  
    // Clona os elementos iniciais e adiciona ao final para ciclo infinito
    images.forEach(img => {
      const clone = img.cloneNode(true);
      carousel.appendChild(clone);
    });
  
    // Define o índice atual da imagem (inicia em 0)
    let currentIndex = 0;
  
    // Obtém a largura de uma única imagem
    const imageWidth = images[0].offsetWidth;
  
    // Calcula o número total de imagens
    const totalImages = document.querySelectorAll('.product-container img').length;
  
    // Define a largura total do container do carrossel (largura de uma imagem * número total de imagens)
    carousel.style.width = `${(imageWidth * totalImages) - 3}px`;
  
    // Função para mover para a próxima imagem
    function moveToNextImage() {
      // Define a transição com animação suave
      carousel.style.transition = 'transform 0.8s ease-out';
  
      // Incrementa o índice atual
      currentIndex++;
  
      // Move o container do carrossel para a esquerda (posição relativa ao índice atual)
      carousel.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
    }
  
    // Adiciona um listener ao evento "transitionend" do container do carrossel
    carousel.addEventListener('transitionend', () => {
      // Verifica se atingiu o final do ciclo de imagens clonadas
      if (currentIndex >= totalImages / 2) {
        // Remove a transição para evitar animação durante o reset
        carousel.style.transition = 'none';
  
        // Reseta o índice para 0 (volta ao início do ciclo)
        currentIndex = 0;
  
        // Move o container do carrossel de volta para o início sem transição visível
        carousel.style.transform = `translateX(0px)`;
  
        // Define um timeout para retornar a animação após um breve período (evita saltos visuais)
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-out';
        }, 50);
      }
    });
  
    // Configura um timer para mover automaticamente para a próxima imagem a cada 2 segundos
    setInterval(moveToNextImage, 2500);
  };
  