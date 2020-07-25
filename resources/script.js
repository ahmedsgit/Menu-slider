let toggle = document.getElementById('toggle');
let modal = document.getElementById('modal');
let openModal = document.getElementById('open');
let closeModal = document.getElementById('close');

//Toggle nav
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//show Modal
openModal.addEventListener('click', () => modal.classList.add('show-modal'));

//hide Modal
closeModal.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);