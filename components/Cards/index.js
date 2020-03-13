// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//AXIOS
const addCards = document.querySelector('div.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    Object.values(response.data.articles).forEach(article => {
        article.forEach(oneCard =>{
            addCards.appendChild(theCards(oneCard))
        })
    })
})
.catch(error => {
    console.log("the data was not returned",error)
})


function theCards(data) {
//CARD
const card = document.createElement('div');
card.classList.add('card');

//HEADLINE
const headline = document.createElement('div');
headline.classList.add('headline');
headline.textContent = data.headline;
card.appendChild(headline);

//AUTHOR
const author = document.createElement('div');
author.classList.add('author');
card.appendChild(author);

//IMGDIV
const imgDiv = document.createElement('div')
imgDiv.classList.add('img-container')
author.appendChild(imgDiv);

//IMG
const img = document.createElement('img');
img.setAttribute('src', data.authorPhoto)
imgDiv.appendChild(img);

//AUTHORS NAME
const aName = document.createElement('span');
aName.textContent = `By ${data.authorName}`;
card.appendChild(aName);
author.appendChild(aName);

return card;

}