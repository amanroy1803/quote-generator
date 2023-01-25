// variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [
    {
        quote: `"I'm not here to be perfect, I'm here to be real."`,
        person: `Lady Gaga`
    },
    {
        quote: `"I'm not interested in money. I just want to be wonderful."`,
        person: `Marilyn Monroe`
    },
    {
        quote: `"The only thing that feels better than winning is winning when nobody thought you could."`,
        person: `Hank Aaron`
    },
    {
        quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        person: `Winston Churchill`
    },
    {
        quote: `"If you can dream it, you can do it."`,
        person: `Walt Disney`
    },
    {
        quote: `"If you want something done, ask a busy person to do it." `,
        person: `Laura Ingalls Wilder`
    },
    {
        quote: `"If your actions inspire others to dream more, learn more, do more and become more, you are a leader."`,
        person: `John Quincy Adams`
    },
    {
        quote: `"The best way to find out if you can trust somebody is to trust them."`,
        person: `Ernest Hemingway`
    },
    {
        quote: `"The only Limit to our realization of tomorrow will be our doubts of today."`,
        person: `Franklin D. Roosevelt`
    },
    {
        quote: `"We may encounter many defeats but we must not be defeated." `,
        person: `Maya Angelou`
    }
]
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})