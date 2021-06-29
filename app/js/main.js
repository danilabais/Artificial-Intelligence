function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('burger').classList.toggle('active');
    document.querySelector('body').classList.toggle('noscroll');


  }

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    
    spaceBetween: 30,


    breakpoints: {
      // when window width is >= 320px
      1910: {
        slidesPerView: 5,
        slidesPerGroup: '4',
      },
      // when window width is >= 480px
      1400: {
        slidesPerView: 4,
        slidesPerGroup: '3',
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        slidesPerGroup: '2',
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: '1',
      }
    }



  });