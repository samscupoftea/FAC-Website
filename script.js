// Define the musicData object with information about different artists and their albums
let musicData = {
    "Jeff Buckley": {
        album: "Grace",
        year: 1994,
        whyLove: "I discovered the album back in 2009 while still learning how to play guitar and write songs. It was this album that really inspired me in a way that nothing ever really had. Thanks to this record I managed to find and cultivate my own voice for song-writing. It's also just a beautiful, beautiful record."
    },
    "Laura Marling": {
        album: "I Speak Because I Can",
        year: 2010,
        whyLove: "This record came out just as I was starting my first year at University in Manchester. Laura Marling's songwriting and unique style was just so inspiring and just what I needed when trying to develop my own material."
    },
    "Talk Talk": {
        album: "The Colour of Spring",
        year: 1986,
        whyLove: "Talk Talk are mostly known for their 80's pop hit 'It's My Life', but they are so much more than that. Mark Hollis and the band went on to make increasingly nuanced and beautiful music. As time went on, Mark Hollis would go on to produce less and less commercialized music. For me, The Colour of Spring embodies the perfect balance of the catchy pop affectation that they started with, but with more varied arrangements and deeper material."
    },
};

// Select the table body element
let musicTable = document.querySelector('#musicTable tbody');

// Iterate over each artist in the musicData object
for (let artistTitle in musicData) {
    let album = musicData[artistTitle];

    // Create a new table row
    let row = document.createElement('tr');

    // Create a cell for the artist's name and append it to the row
    let artistCell = document.createElement('td');
    artistCell.textContent = artistTitle;
    row.appendChild(artistCell);

    // Create a cell for the album name and append it to the row
    let albumCell = document.createElement('td');
    albumCell.textContent = album.album;
    row.appendChild(albumCell);

    // Create a cell for the album's release year and append it to the row
    let yearCell = document.createElement('td');
    yearCell.textContent = album.year;
    row.appendChild(yearCell);

    // Create a cell for the reason why the artist loves the album and append it to the row
    let whyLoveCell = document.createElement('td');
    whyLoveCell.textContent = album.whyLove;
    row.appendChild(whyLoveCell);

    // Append the row to the table
    musicTable.appendChild(row);
}

// Select the musicForm element
let musicForm = document.querySelector('#musicForm');

// Add an event listener to the form's submit event
musicForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Select the input fields
    let artistInput = document.querySelector('#artistInput');
    let albumInput = document.querySelector('#albumInput');
    let yearInput = document.querySelector('#yearInput');
    let whyLoveInput = document.querySelector('#whyLoveInput');

    // Create a new album object with the data entered by the user
    let newAlbum = {
        album: albumInput.value,
        year: parseInt(yearInput.value),
        whyLove: whyLoveInput.value
    };

    // Add the new album to the existing musicData object
    musicData[artistInput.value] = newAlbum;

    // Add a new row to the table with the new album data
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${artistInput.value}</td>
      <td>${newAlbum.album}</td>
      <td>${newAlbum.year}</td>
      <td>${newAlbum.whyLove}</td>
    `;
    musicTable.appendChild(row);

    // Reset the form
    musicForm.reset();
});

//Live date and time clock JS Code. 

// Select the output and numberDate elements
let output = document.getElementById('output');
let numberDate = document.getElementById('date');

// Create a new Date object
let d = new Date();

// Get the current day of the week
let day = d.getDay();

// Get the current date and time as a localized string
let ndate = d.toLocaleString();

// Convert the day number to the corresponding day name
switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

// Set the day name as the content of the output element
output.innerHTML = day;

// Set the current date and time as the content of the numberDate element
date.innerHTML = ndate;


// Array and JS for my Why Software Development.

// Define an array of answers for the question "Why Software Development?"
const answers = [
    {
        answer: `As a musician and a Philosophy graduate, creativity and the pursuit of knowledge go hand in hand for me. Since joining my first FAC meet-up back in January, I have thoroughly enjoyed the process of learning and finding my own way to build projects and enhance my understanding. During my studies, I have witnessed the diverse and personal ways in which individuals express their personalities through their coding style and problem-solving approaches.`,
    },

];

// Select the question buttons and the answer element
let qbtn1 = document.querySelector("#Qbtn1");
let qbtn2 = document.querySelector("#Qbtn2");
let qbtn3 = document.querySelector("#Qbtn3");
let qbtn4 = document.querySelector("#Qbtn4");
let qbtn5 = document.querySelector("#Qbtn5");
let qbtn6 = document.querySelector("#Qbtn6");
let answer = document.querySelector(".answer");

// Add event listeners to each question button
qbtn1.addEventListener("click", function () {
    answer.innerHTML = answers[0].answer;
});


// Set the href attribute of the githubLink element to the GitHub repository URL
let githubLink = document.getElementById("github");
githubLink.href = "https://github.com/samscupoftea";

// Sam's record shop.

