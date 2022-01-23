const quote = document.querySelector('.quote'); 
const author = document.querySelector('.author'); 
const allQuote = [
    {setence: "Everything is difficult until you know how to do it.", 
    from: "Unknown"},
    {setence: "Live boldly. Push yourself. Don't settle.",
    from: "Me Before You"},
    {setence: "If it passes by, then it's a relation. If it sinks into one's mind, then it's love.",
    from: "Sleeping Beauty"},
    {setence: "It's better to do less than you hoped than nothing at all.",
    from: "James Clear"},
    {setence: "While we wait for life, life passes.",
    from: "Seneca"}
];

const randomQuote = allQuote[Math.floor(Math.random()*allQuote.length)];
quote.innerText = randomQuote.setence;
author.innerText = randomQuote.from;
