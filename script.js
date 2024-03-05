const bar = document.getElementById('bar');          /*used for activating menu bar*/
const nav = document. getElementById( 'navbar');

if (bar){
    bar.addEventListener('click', () =>{
    nav.classList.add('active');
})
}