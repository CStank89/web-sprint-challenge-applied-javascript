axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (stuff =>{
        console.log(stuff)
    })
    .catch (error =>{
        console.log(error)
    })
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>

//       <div class="author">

//       <div class="img-container">
//           <img src={url of authors image} />
//       </div>
//       <span>By {author's name}</span>

//      </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function cardMaker(object){
    const card = document.createElement('div')
    card.classList= ('card')

    const headLine = document.createElement('div')
    headLine.classList=('headline')

    const author = document.createElement('div')
    author.classList = ('author')

    const imgDiv = document.createElement('div')
    imgDiv.classList = ('img-container')

    const img = document.createElement('img')
    img.src = object.authorName

    const span = document.createElement('span')
    span.textContent = ('hi')

    card.appendChild(headLine)
    headLine.appendChild(author)
    headLine.appendChild(imgDiv)
    imgDiv.appendChild(img)
    span.appendChild(headLine)

    card.addEventListener('click', event =>{
        console.log(headLine)
    })



  return card
}
    const newCard = document.querySelector('.cards-container')
    const card = cardMaker('https://lambda-times-api.herokuapp.com/articles');
    newCard.appendChild(card)