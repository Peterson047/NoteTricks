// Select the button
const btn = document.querySelector('.btn-toggle');
const nav = document.getElementById('myDIV')



// Listen for a click on the button
btn.addEventListener('click', function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('dark-theme'), ('tab-color'), ('tabs');
    nav.classList.toggle('tab-color')
})
