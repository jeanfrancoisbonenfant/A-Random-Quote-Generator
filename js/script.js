// Array for Quote 
const quotes = [
  {
    quote: "Once you have tasted flight, you will forever walk the earth with your eyes turned skywards.",
    source: "Leonardo Da Vinci",
    image: "./image/Leonardo.jpeg",
  },
  {
    quote: "When everything seems to be going against you, remeber that aircraft take off against the wind, not with it",
    source: "Henry Ford",
    image: "./image/Henry ford.jpeg",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams",
    source: "Eleanor Roosevelt",
    image: "./image/Roosevelt_Eleanor.jpeg",
  },
  {
    quote: "Too many people have opinions on things they know nothing about. And the more ignorant they are, the more opinions they have.",
    source: "Thomas Hildern",
    citation: "Fallout: New Vegas",
    year: 2009
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    image: "./image/Albert.jpeg",
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    source: "Andre Gide",
    citation: "Autumn Leaves",
    year: 1950,
  },
];

//Function getRandomQuote pick a random quote from the Array then return it.
const getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length)
      return quotes[randomNumber];
};

/* Function printQuote utilize the randomQuote selected 
by the previous getRandomQuote function & create a layout 
to be presented throught the message variable. 
*/
const printQuote = () => {
  let nextQuote = getRandomQuote(quotes);
  let message = `<p class = "quote"> ${nextQuote.quote} </p>
                  <p class = "source"> ${nextQuote.source}`;
                    if (nextQuote.citation !== undefined){
                    message += `<span class="citation">${nextQuote.citation}</span>`;
                    }
                    if (nextQuote.year !== undefined){
                      message += `<span class="year">${nextQuote.year}</span>`;
                    }
                    if (nextQuote.image !== undefined){
                      message += `<img src="${nextQuote.image}"alt="image of ${nextQuote.source}">`;
                    }
                    message += `</p>`; 

//The layout created earlier is sent to the innerHTML of the quote-box.                    
document.getElementById('quote-box').innerHTML = message;                    
 

/*Function colorGenerator simply create a random number on 256base
 to be pass inside randomRGB to create a random RGB color.*/
const colorGenerator = () => Math.floor(Math.random() * 256);


/*Function randomRGB take the random number created by colorGenerator
to form a variable to hold a RGB color layout RGB(RED,GREEN,BLUE,Opacity)
*/
const randomRGB = (value) => {
  const color = `rgb(${value()}, ${value()}, ${value()}, 0.2)`
    return color;
  };


//The random RGB color generated by randomRGB is set to style the backgroundColor of the container ID
document.getElementById('container').style.backgroundColor = randomRGB(colorGenerator); 


/* Addtionnal option to get a random color for the body background as well.
document.body.style = `background-color: ${randomRGB(colorGenerator)}`;
 */ 


//Function image replace the body background by a random image 1680x1050.
const image = () => {
   document.body.style.backgroundImage = "url(https://picsum.photos/1680/1050)"; 
  };


/*function image is called with the PrintQuote function
 to change the background image everytime PrintQuote function is called.*/
image();             
};

//set a timer to call the printQuote function every 5sec to change the Quote displayed.
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
