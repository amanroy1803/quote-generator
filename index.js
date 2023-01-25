// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const url = "https://api.quotable.io/random";
let getQuote = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            // console.log(item.content);
            quote.innerText = item.content;
            // console.log(item.author);
            person.innerText = item.author;
        })
}
btn.addEventListener("click", getQuote);
