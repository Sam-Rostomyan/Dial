export function tabs(allBtns, allTabs, activeBtn, activeTab) {
   let btns = document.querySelectorAll(`.${allBtns}`);
   let tabs = document.querySelectorAll(`.${allTabs}`);
   for (let i = 0; i < btns.length; i++) {
       btns[i].classList.remove('active');
       tabs[i].classList.remove('active');
   }
   activeBtn.classList.add('active');
   document.querySelector(`#${activeTab}`).classList.add('active');
}

// burger Open
export function burgerOpen(openBurger) {
    document.querySelector(`${openBurger}`).style.top = '0vh';
}
// burger Close
export function burgerClose(closeBurger) {
    document.querySelector(`${closeBurger}`).style.top = '-100vh';
}

// modal Open
export function openModal(modalOpen) {
    document.querySelector(`${modalOpen}`).style.top = '0vh';
}
// modal Close
export function closeModal(modalClose) {
    document.querySelector(`${modalClose}`).style.top = '-120vh';
}

// burger Toggle
export function burgerTggle(burgerToggle) {
    document.querySelector(`${burgerToggle}`).classList.toggle('active');
}