let qoutes = [
    {
        "qoute": "Life is a mountain. Your goal is to find your path, not to reach the top.",
        "author": "Maxime Lagacé"
    },
    {
        "qoute": "Three things in life – your health, your mission, and the people you love.",
        "author": "Naval Ravikant"
    },
    {
        "qoute": "Life is from the inside out. When you shift on the inside, life shifts on the outside",
        "author": "Kamal Ravikant"
    },
    {
        "qoute": "If you spend too much time thinking about a thing, you’ll never get it done.",
        "author": "Bruce Lee"
    },
    {
        "qoute": "Keep your eyes on the stars and your feet on the ground",
        "author": "Theodore Roosevelt"
    },
];

function generateQoute(){
    let randomIndex = Math.floor(Math.random()*(qoutes.length-1+1)+1);
    let selectQoute = qoutes[randomIndex];

    let qouteText = document.getElementById("qouteText");
    let qouteAuth = document.getElementById("qouteAuthor");

    qouteText.innerHTML = selectQoute.qoute;
    qouteAuth.innerHTML = "- ".concat(selectQoute.author);
}