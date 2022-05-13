window.addEventListener('DOMContentLoaded', () => {
  let hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header-main__wrapper--secondary'),
      scrollUp = document.querySelector('#scroll-up');

  hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
  })

  let specialistSlider = new Glide('.section-specialist__slider', {
    perView: 5,
    breakpoints: {
      992: {
        perView: 4,
        peek: {
          before: 0,
          after: 100,
        }
      },
      768: {
        perView: 3,
        peek: {
          before: 0,
          after: 50,
        }
      },
      576: {
        perView: 1,
        before: 0,
        after: 30,
      }
    }
  })

  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0
    });
  })

  specialistSlider.mount();

  let reviewsSlider = new Glide('.section-reviews__slider', {
    perView: 3,
    breakpoints: {
      768: {
        perView: 2,
        peek: {
          before: 0,
          after: 50,
        }
      },
      576: {
        perView: 1,
        before: 0,
        after: 30,
      }
    }
  })

  reviewsSlider.mount();
})

$(function () {
  $('.section-about__item').on('click', function() {
    $('.section-about__item').not($(this)).removeClass('active');
    $(this).addClass('active');

    $('.section-about__wrap-toggle').not($('.section-about__wrap-toggle').eq($(this).index())).removeClass('active');
    $('.section-about__wrap-toggle').eq($(this).index()).addClass('active')
  })
})