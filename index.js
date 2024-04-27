const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const textarea = document.getElementById('textarea');
const totalCounter = document.getElementById('total-characters-counter');

textarea.addEventListener('keyup', () => {
  updateTotalCounter();
});

function updateTotalCounter() {
  totalCounter.textContent = textarea.value.length;
}
