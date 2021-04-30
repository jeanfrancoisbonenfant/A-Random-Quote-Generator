/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
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
/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length)
      return quotes[randomNumber];
};
console.log(getRandomQuote(quotes));
/***
 * `printQuote` function
***/
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
                    
                    
const colorGenerator = () => Math.floor(Math.random() * 256);

const randomRGB = (value) => {
  const color = `rgb(${value()}, ${value()}, ${value()}, 0.2)`
    return color;
  };
document.getElementById('quote-box').innerHTML = message;

document.getElementById('container').style.backgroundColor = randomRGB(colorGenerator); 
/*
document.body.style = `background-color: ${randomRGB(colorGenerator)}`;
 */ 

const image = () => {
   document.body.style.backgroundImage = "url(https://picsum.photos/1680/1050)"; 
  };
image();             
};


setInterval(printQuote, 5000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
