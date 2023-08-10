document.getElementById("new-quote").addEventListener("click", newQuote);

function newQuote() {
  render();
}

function render() {
  fetch(
    `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
  )
    .then((response) => response.json())
    .then((data) => {
      const quotesArr = data.quotes;
      const randomNum = Math.floor(Math.random() * quotesArr.length);
      const randomQuote = quotesArr[randomNum];

      document.getElementById("container").innerHTML = `
      
            <div id="quote-container">
            <h3 class="quote-text">“ ${randomQuote.quote}</h3>
            <h4 class="quote-author">${randomQuote.author}</h4>
          </div>
          <div class="btn-container">
            <a
              href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuote.quote}"
              ><i class="fa-brands fa-x-twitter twitter-btn"></i
            ></a>
  
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuote.quote}"
              ><i class="fa-brands fa-facebook-f facebook-btn"></i
            ></a>
  
         
          </div>
      `;
    });
}

render();
