window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  

// function scrollToElement(elementSelector, instance = 0) {
//     // Select all elements that match the given selector
//     const elements = document.querySelectorAll(elementSelector);
//     // Check if there are elements matching the selector and if the requested instance exists
//     if (elements.length > instance) {
//         elements[instance].scrollIntoView({ behavior: 'smooth' });
//     }
// }

// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");

// link1.addEventListener('click', () =>{
//     scrollToElement('.header');
// })

// link2.addEventListener('click', () =>{
//     scrollToElement('.about');
// })