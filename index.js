// Function to change decorative line below text
const changeImage = () => {
  const image = document.getElementById('divider');

  if (window.innerWidth < 420 ) {
    image.setAttribute('src', './images/pattern-divider-mobile.svg')
  } else {
    image.setAttribute('src', './images/pattern-divider-desktop.svg')
  }  

  window.addEventListener('resize', changeImage);
}
changeImage();

// Code to fetch data and render in the app
const fetchButton = document.getElementById('fetch-button');
const mainText = document.getElementById('main-text');
const adviceNumber = document.getElementById('advice-number');

const fetchData = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    adviceNumber.textContent = data.slip.id
    mainText.textContent = data.slip.advice
  } catch (error) {
    console.log(error);
    throw error;
  }
}

fetchButton.addEventListener('click', fetchData);