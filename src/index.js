const messages = [
    "Oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura",
    "Jose",
    "Alberto",
    "Zavala",
    "Flores",
    "Ana",
    "De la Torre",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };