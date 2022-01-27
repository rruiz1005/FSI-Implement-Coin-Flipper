// Some things left in comments that show a bit of my process in trial and error, as well as learning new ways to be more efficient.

let numHeads = 0;
let numTails = 0;
// let perHeads = 0;
// let perTails = 0;
// let totalFlips = numHeads + numTails;

// Selecting elements with id of flip and clear
// const flipBtn = document.querySelector('#flip')       
// const clearBtn = document.querySelector('#clear')  

// Containers for numbers and percentages
let numHeadsContainer = document.getElementById('heads')
let perHeadsContainer = document.getElementById('heads-percent')
let numTailsContainer = document.getElementById('tails')
let perTailsContainer = document.getElementById('tails-percent')

// Flip button listener
document.getElementById('flip').addEventListener('click', function() {
    let resultHeads = Math.random() < 0.5

    if (resultHeads) {
        document.getElementById('penny').src = 'assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'You Flipped Heads!'

        numHeads += 1
        console.log(numHeads)
        numHeadsContainer.textContent = numHeads
    }
    else {
        document.getElementById('penny').src = 'assets/images/penny-tails.jpg'
        document.getElementById('message').textContent = 'You Flipped Tails!'

        numTails += 1
        console.log(numTails)
        numTailsContainer.textContent = numTails
    }

let totalFlips = numHeads + numTails;
let perHeads = 0

let perTails = 0

    if (totalFlips > 0) {
        perHeads = Math.round((numHeads / totalFlips) * 100)
        perTails = Math.round((numTails / totalFlips) * 100)
        
    }
    perHeadsContainer.textContent = `${perHeads}%`
    perTailsContainer.textContent = `${perTails}%`
    console.log(perHeadsContainer)
})

//clear button listener
document.getElementById('clear').addEventListener('click', function() {
    numHeads = 0
    numTails = 0

    document.getElementById('message').textContent = "Let's Get Rolling"

    let totalFlips = numHeads + numTails

    let perHeads = 0
    let perTails = 0

    if(totalFlips > 0) {
        perHeads = Math.round((numHeads / totalFlips) * 100)
        perTails = Math.round((numTails / totalFlips) * 100)

    }
    perHeadsContainer.textContent = `${perHeads}%`
    perTailsContainer.textContent = `${perTails}%`
    numHeadsContainer.textContent = numHeads
    numTailsContainer.textContent = numTails
    console.log(numHeads)
    console.log(perHeads)
})



// Variables
// Outcome of Flip
// Number of Heads
// Number of Tails
// Total Number of Flips
// Percentage of Heads
// Percentage of Tails
// Flip Button
// Clear Button
// Image
// Status Message

// Process
// Use querySelector to select...
// Flip Button
// Clear Button
// Image
// Status Message

// Event Listeners...
// Hover for Flip Button
// Hover for Clear Button
// Click for Flip Button
// Click for Clear Button

// Initial State of Page
// Create Image
// Show Heads Image
// Create Message Area
// Create Flip Button
// Create Clear Button

// On the flip
// Randomly generate heads or tails
// Image is set
// Message is set
// Number of heads is set
// Percentage of heads is set
// Number of tails is set
// Percentage of tails is set

// On the Clear
// Reset to initial state
// 