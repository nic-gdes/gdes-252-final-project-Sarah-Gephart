// HAMBURGER MENU BUTTON

// declare references (i.e., the button and ul)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// add the click function with a toggle so that the hamburger can toggle the hidden menu

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


// // HAMBURGER MENU BUTTON

// // declare references (i.e., the button)

// const moon = document.querySelector("#moon");

// // add the click function with a toggle so that the moon can toggle dark mode

// moon.addEventListener('click', function() {
//     moon.classList.toggle('active');
// })

// const darkModeToggle = document.getElementById('darkModeToggle');

// darkModeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });


// // JavaScript to handle dark mode toggle
// const darkModeToggle = document.getElementById('darkModeToggle');
// const toggleIcon = document.getElementById('toggleIcon');

// darkModeToggle.addEventListener('click', () => {
//     toggleIcon.classList.toggle('moon');
//     toggleIcon.classList.toggle('sun');
//     // Add any other logic you need for toggling dark mode
// });



let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


// CONVERSIONS


// convert fahrenheit to celsius

function convert() {
    // 1. fetch value from input
    const input = parseInt(document.getElementById("input").value);

    // 2. convert to celsius
    const celsius = (input - 32) * 0.5556;
    console.log(celsius);

    // 3. display number
    document.getElementById("celsius").innerText = celsius;
}

function convert2() {
    // 1. fetch value from input
    const input = parseInt(document.getElementById("input").value);

    // 2. convert to miles
    const miles = (input * 0.0001894);
    console.log(miles);

    // 3. display number
    document.getElementById("miles").innerText = miles;
}

function convert3() {
    // 1. fetch value from input
    const input = parseInt(document.getElementById("input").value);

    // 2. convert to centimeters
    const centimeters = (input * 2.54);
    console.log(centimeters);

    // 3. display number
    document.getElementById("centimeters").innerText = centimeters;
}