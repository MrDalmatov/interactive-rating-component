const ratingItem = document.querySelector('.rating-item');
const thakYouItem = document.querySelector('.thank-you-item');
const ratingBtn = document.querySelectorAll('.rating-item__button');
const submitBtn = document.querySelector('.rating-item__submit-button');
const thankYouSelected = document.querySelector('.thank-you-item__selected');

ratingBtn.forEach(el => {
  el.addEventListener('click', () => {
    ratingBtn.forEach(button => {
      button.classList.remove('selected');
    })
    el.classList.add('selected');
  })
  console.log(el);
})

submitBtn.addEventListener('click', () => {
  ratingItem.classList.add('hidden');

  thakYouItem.classList.remove('hidden');
})