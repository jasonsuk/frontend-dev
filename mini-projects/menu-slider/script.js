const toggleNav = document.getElementById('toggleNav');
const modal = document.getElementById('modal');
const signupBtn = document.getElementById('signUp');
const closeBtn = document.getElementById('close-btn');

toggleNav.addEventListener('click', (e) => {
    document.body.classList.toggle('show-nav');
})

signupBtn.addEventListener('click', (e) => {
    // toggleModal();
    modal.classList.add('show-modal');

})

closeBtn.addEventListener('click', (e) => {
    // toggleModal();
    modal.classList.remove('show-modal');
})
// const toggleModal = () => modal.hidden = !modal.hidden;


// Hide modal on outside click
window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
})