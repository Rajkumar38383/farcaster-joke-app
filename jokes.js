// Collection of funny jokes across different categories
const jokes = [
    // Programming Jokes
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
    "Why do Java developers wear glasses? Because they can't C#! 👓",
    "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺",
    "Why did the developer go broke? Because he used up all his cache! 💸",
    "What's a programmer's favorite hangout place? Foo Bar! 🍻",
    "Why did the programmer quit his job? Because he didn't get arrays! 📊",
    "How do you comfort a JavaScript bug? You console it! 🐞",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25! 🎃🎄",
    "What do you call a programmer from Finland? Nerdic! 🇫🇮",

    // Tech Jokes
    "Why was the computer cold? It left its Windows open! 🪟",
    "What do you call a computer that sings? A-Dell! 🎵",
    "Why did the PowerPoint presentation cross the road? To get to the other slide! 📊",
    "What's the object-oriented way to become wealthy? Inheritance! 💰",
    "Why don't keyboards sleep? Because they have two shifts! ⌨️",
    "What do you get when you cross a computer with a lifeguard? A screensaver! 🏊",
    "Why was the cell phone wearing glasses? It lost all its contacts! 📱",
    "What did the router say to the doctor? It hurts when IP! 🏥",

    // Crypto/Web3 Jokes
    "Why did the Bitcoin break up with the Dollar? Too much baggage! 💔",
    "What's a crypto trader's favorite type of music? Heavy metal... when the market crashes! 🎸",
    "Why don't crypto investors ever get cold? They're always HODLING! 🥶",
    "What do you call a blockchain developer who doesn't shower? Decentralized! 🚿",
    "Why did the Ethereum developer go to therapy? Too much gas! ⛽",

    // General Tech Humor
    "There are 10 types of people in the world: those who understand binary and those who don't! 1️⃣0️⃣",
    "Why do programmers hate nature? It has too many bugs! 🌳",
    "What's the best thing about a Boolean? Even if you're wrong, you're only off by a bit! ✅",
    "Why did the function break up with the variable? She had too many arguments! 💬",
    "What do you call 8 hobbits? A hobbyte! 🧙‍♂️",
    "Why did the developer stay calm? Because he had exceptional handling! 🧘",
    "What's a pirate's favorite programming language? Arrr... but they also love the C! 🏴‍☠️",
    "Why do programmers prefer iOS development? Because they can't Swift away from it! 🍎",
    "What did the developer say to the broken code? 'I'll catch you later!' 🎣",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself! 😢"
];

// Get a random joke from the collection
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getRandomJoke, jokes };
}
