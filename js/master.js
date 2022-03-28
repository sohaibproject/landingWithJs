// Toggel Spin Claa on Icon

document.querySelector('.toggel-icon i ').onclick = function ()  {
    // this.classList.toggle('fa-spin')
   this.classList.toggle('fa-spin')
   document.querySelector('.setting-box').classList.toggle('open')
}
// toggle-icon
// console.log(document.querySelector('.toggel-icon i '));

//  select Landing Element
let landingPage = document.querySelector(".landing-page");
// get Array Of Images
let imagsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// change Background image Url
// landingPage.style.backgroundImage = 'url("../imgs/03.jpg")';


// Get random Number  
 

setInterval(()=>{
    let randomNumber = Math.floor(Math.random() * imagsArray.length)
    landingPage.style.backgroundImage = `url("../imgs/${imagsArray[randomNumber]}")`;
},2000)

