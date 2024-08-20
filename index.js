let currentQuote = '';
let savedQuotes = [];

async function getRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random'); // API endpoint for a random quote
        const data = await response.json();
        currentQuote = `"${data.content}" - Author: ${data.author}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        currentQuote = 'Sorry, something went wrong. Please try again later.';
    }
    document.getElementById('h1main').textContent = currentQuote;
}

// Function to display the quote
async function displayQuote() {
    await getRandomQuote(); // Await the quote fetching process
    document.getElementById('h1main').textContent = currentQuote;
    document.getElementById('error-qoute').textContent = ``; // Clear error message when a new quote is displayed
}

function saveQuote() {
    if (!savedQuotes.includes(currentQuote)) {
        savedQuotes.push(currentQuote);
        document.getElementById('error-qoute').textContent = ''; // Clear error message
    } else {
        let error = "Cannot be saved, as it is already there.";
        console.log(error);
        document.getElementById('error-qoute').textContent = error; // Display error message
    }
}

function savedQoutes() {

    const listElement = document.getElementById("toshowAllSavedqoutes");
    listElement.innerHTML = '';

    for (i = 0; i < savedQuotes.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(savedQuotes[i]);
  li.appendChild(text);
  document.getElementById("toshowAllSavedqoutes").appendChild(li);
    }
}
 


// Attach event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myGenbtn').onclick = displayQuote;
    document.getElementById('save-quote').onclick = saveQuote;
    document.getElementById('saved-quotes').onclick = savedQoutes;
});
