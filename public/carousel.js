document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { id: 1, name: 'Predator 30th Anniversary Limited Edition Pool Cue - Ebony', image: '/images/product1.jpg' },
      { id: 2, name: 'Predator Throne Series Pool Cues', image: '/images/product2.jpg' },
      { id: 3, name: 'Predator BK Rush Pink Break Cue', image: '/images/product3.jpg' },
      { id: 4, name: 'Predator BK4 Break Cue - Sport Wrap', image: '/images/product4.jpg' },
      { id: 5, name: 'Predator Air Rush Gold Jump Cue - Sport Wrap', image: '/images/product5.jpg' },
      { id: 6, name: 'Predator Air II Jump Cue With Sport Wrap', image: '/images/product6.jpg' },
      { id: 7, name: 'Predator SP2 REVO Adventura 1 Pool Cue', image: '/images/product7.jpg' },
      { id: 8, name: 'Predator Ikon4 Series Pool Cues', image: '/images/product8.jpg' }
    ];
  
    let currentIndex = 0;
    const carouselImage = document.getElementById('carouselImage');
    const carouselTitle = document.getElementById('carouselTitle');
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % products.length;
      carouselImage.src = products[currentIndex].image;
      carouselTitle.textContent = products[currentIndex].name;
    }, 5000); // Chuyển đổi ảnh sau mỗi 5 giây
  });
  