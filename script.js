const ratingItem = document.querySelector('.rating-item');
const thakYouItem = document.querySelector('.thank-you-item');
const ratingButtonsContainer = document.querySelector('.raiting-item__buttons-box');
const ratingBtn = document.querySelectorAll('.rating-item__button');
const submitBtn = document.querySelector('.rating-item__submit-button');
const thankYouSelected = document.querySelector('.thank-you-item__selected');
const closeIcon = document.querySelector('.close-icon');

let selected = null;

ratingButtonsContainer.addEventListener('click', (e) => {
  const targetBtn = e.target;
  if(targetBtn.classList.contains('rating-item__button')) {
    ratingBtn.forEach(button => {
      button.classList.remove('selected');
    });
    targetBtn.classList.add('selected');
  }
  selected = targetBtn.innerHTML;
  thankYouSelected.textContent = `You selected ${selected} out of 5`
})



submitBtn.addEventListener('click', () => {
  ratingItem.classList.add('hidden');
  thakYouItem.classList.remove('hidden');
})

closeIcon.addEventListener('click', () => {
  thakYouItem.classList.add('hidden');
  ratingItem.classList.remove('hidden');
});