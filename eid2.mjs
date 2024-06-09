document.addEventListener("DOMContentLoaded", function() {
    let name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('mainGreeting').innerText = `Eid Mubarak, ${name}!`;
        document.getElementById('personalizedMessage').innerText = `Wishing you a joyous and blessed Eid ul-Adha, ${name}.`;
        document.getElementById('personalizedMessage').classList.remove('hidden');
    }
});

function showGreeting() {
    let specialMessage = document.getElementById('specialMessage');
    specialMessage.innerText = `May your sacrifices be appreciated and your prayers be answered. Happy Eid ul-Adha, ${document.getElementById('mainGreeting').innerText.split(', ')[1]}!`;
    specialMessage.classList.remove('hidden');
    specialMessage.classList.add('animated', 'bold');
}
document.addEventListener("DOMContentLoaded", function() {
    let name = prompt("Please enter your name (Urdu/English):");
    if (name) {
        document.getElementById('mainGreeting').innerText = `Eid Mubarak, ${name}!`;
        document.getElementById('personalizedMessage').innerText = `Wishing you a joyous and blessed Eid ul-Adha, ${name}.`;
        document.getElementById('personalizedMessage').classList.remove('hidden');
    }
});

function showGreeting() {
    let name = document.getElementById('mainGreeting').innerText.split(', ')[1].replace('!', '');
    let urduName = translateToUrdu(name);
    let specialMessage = document.getElementById('specialMessage');
    specialMessage.innerHTML = `<strong>May your sacrifices be appreciated and your prayers be answered. Happy Eid ul-Adha, ${name}!<br><br>قربانیاں قبول ہوں اور دعائیں پوری ہوں۔ عید الاضحیٰ مبارک، ${urduName}!</strong>`;
    specialMessage.classList.remove('hidden');
    specialMessage.classList.add('animated', 'bold');
}

function translateToUrdu(name) {
    // Placeholder function for translating the name to Urdu. Implement translation logic here if needed.
    // For demonstration purposes, let's just return the same name.
    return name;
}
