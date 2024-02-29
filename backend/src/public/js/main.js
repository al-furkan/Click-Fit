/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu')})
}
/*===== MENU Hidden =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu')})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link'); // Fix: remove the space in '.nav_ link'
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove('show-menu');
}
 navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== API DATA ===============*/
document.addEventListener('DOMContentLoaded', function () {
//api url
  const apiUrl = 'http://numbersapi.com/1/30/date?json';

  // Fetch data from the Numbers API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Update the HTML with the fetched data
          document.getElementById('text').innerText = data.text;
          document.getElementById('year').innerText = data.year;
          document.getElementById('number').innerText = data.number;
          document.getElementById('type').innerText = data.type;
          document.getElementById('found').innerText = data.found;
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          // Display an error message if fetching fails
          document.getElementById('year').innerText = 'Error';
          document.getElementById('number').innerText = 'Error';
          document.getElementById('type').innerText = 'Error';
          document.getElementById('found').innerText = 'Error';
      });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateFrom = document.getElementById('calculate-from'),
calculateCm = document.getElementById('calculate-cm'),
calculateKg = document.getElementById('calculate-kg'),
calculateMessege = document.getElementById('calculate__message');

const calculateBmi = (e) => {
e.preventDefault(); // Corrected typo: preventDefault

// Check if the fields have a value
if (calculateCm.value === '' || calculateKg.value === '') { // Corrected to calculateCm.value
  calculateMessege.classList.remove('color-green');
  calculateMessege.classList.add('color-red');
  calculateMessege.textContent = 'Fill in the Height and Weight  ';
}
else{
  const cm = calculateCm.value/100,
  kg=calculateKg.value,
  bmi=Math.round(kg/(cm*cm))
  if(bmi<18.5){
    //add color and display message
    calculateMessege.classList.add('color-green');
    calculateMessege.textContent = `Your BMI is ${bmi} and you are skinny`;
  }
   else if(bmi<24.5){
    //add color and display message
    calculateMessege.classList.add('color-green');
    calculateMessege.textContent = ` Your BMI is ${bmi} and you are healthy`;
  }else{
    //add color and display message
    calculateMessege.classList.add('color-green');
    calculateMessege.textContent = `Your BMI is ${bmi} and you are overweight`;
  }
  calculateCm.value = ''
  calculateKg.value = ''
  
  setTimeout(()=>{
    calculateMessege.textContent=''
  },4000)
}
};

calculateFrom.addEventListener('submit', calculateBmi);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),

contactMessage = document.getElementById('contact-message'),

contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {

e.preventDefault()

// Check if the field has a value

if(contactUser.value === ''){

// Add and remove color

contactMessage.classList.remove('color-green');
contactMessage.classList.add('color-red');
//show message
contactMessage.textContent='You must be Enter Your email'
setTimeout(()=>{
  contactMessage.textContent='';
},4000)
}
else{
  emailjs.sendForm('serviceID', "templateID", "#contact-form", "publicKey").then(()=>{
    contactMessage.classList.add('color-green');
    contactMessage.textContent='Your Registered Successfully'
    setTimeout(()=>{
      contactMessage.textContent='';
    },4000)
  },(error)=>{
    alert('Opps! SomeThing Has FaIld')
  })
  contactUser.value='';
}

}
contactForm.addEventListener('submit',sendEmail);