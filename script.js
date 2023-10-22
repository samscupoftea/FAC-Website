let musicData = {
    "Jeff Buckley": {
        album: "Grace",
        year: 1994,
        whyLove: "I discovered the album back in 2009 while still learning how to play guitar and write songs. It was this album that really inspired me in a way that nothing ever really had. Thanks to this record I managed to find and cultivate my own voice for song-writing. It's also just a beautiful, beautiful record."
    },
    "Laura Marling": {
        album: "I Speak Because I Can",
        year: 2010,
        whyLove: "This record came out just as I was starting my first year at University in Manchester. Laura Marling's songwriting and unqie style was just so inspiring and just what I need when trying to develop my own material."
    },
    "Talk Talk": {
        album: "The Colour of Spring",
        year: 1986,
        whyLove: "Talk Talk are mostly known for their 80's pop hit 'It's My Life', but they are so much more than that. Mark Hollis and the band went on to make increasingly nuanced and beautiful music. As time went on, Mark Hollis would go on to produce less and less commercialised music. For me, The Colour of Spring embodies the perfect balance of the catchy pop affectation that they started with, but with more varied arrangements and deeper material."
    },

};

let musicTable = document.querySelector('#musicTable tbody');

for (let artistTitle in musicData) {
    let album = musicData[artistTitle];

    let row = document.createElement('tr');

    let artistCell = document.createElement('td');
    artistCell.textContent = artistTitle;
    row.appendChild(artistCell);

    let albumCell = document.createElement('td');
    albumCell.textContent = album.album;
    row.appendChild(albumCell);

    let yearCell = document.createElement('td');
    yearCell.textContent = album.year;
    row.appendChild(yearCell);

    let whyLoveCell = document.createElement('td');
    whyLoveCell.textContent = album.whyLove;
    row.appendChild(whyLoveCell);

    musicTable.appendChild(row);
}

let musicForm = document.querySelector('#musicForm');

musicForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

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

let output = document.getElementById('output');
let numberDate = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleString();

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
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}


output.innerHTML = day;
date.innerHTML = ndate;


// Array and JS for my Why Software Development.

const answers = [
    {
        answer: `As a musician and a Philosophy graduate, creativity and the pursuit of knowledge go hand in hand for me. Since joining my first FAC meet-up back in January, I have thoroughly enjoyed the process of learning and finding my own way to build projects and enhance my understanding. During my studies, I have witnessed the diverse and personal ways in which individuals express their personalities through their coding style and problem-solving approaches.`,
    },
    {
        answer: `Creativity holds immense importance to me, and while developing my coding skills, I have had the opportunity to not only express a part of myself but also to be inspired by the ideas of others. This has motivated me to deepen my knowledge and expand my skill set. I appreciate the flexible nature of working with computers and the potential for collaborative work to achieve greater goals.`,
    },
    {
        answer: `In my late teens, I read a book called 'Zen & The Art Of Motorcycle Maintenance' which profoundly changed my approach to life and the challenges it presents. Since then, I have been drawn to topics and endeavors that initially intimidate me. Coding, in particular, has long been an intimidating field. Starting my learning journey in January, I can confidently say that it has been one of the most rewarding pursuits I have undertaken.`,
    },
    {
        answer: `Through teaching over the years in various locations worldwide, I have developed a deep respect for the importance of learning and honing skills. Software development is an area I am eager to explore, as it provides opportunities to accomplish a wide range of tasks and projects.`,
    },
    {
        answer: `I strongly dislike the feeling of stagnation. I thrive on continuous growth, adaptation, and evolution. The field of software development is vast, diverse, and constantly evolving, making it an ideal career choice for me. The ever-changing landscape of coding languages and technologies is where I believe I will find plenty of fulfillment in the years to come.`,
    },
    {
        answer: `I have always had a profound passion for technology and strive to stay updated with the latest developments in the field. My love for tech solidified when I got my first PlayStation console in 1999. Since then, I have utilized these tools for music production, video editing, and now, coding to create exciting projects.`,
    },
];


// Create variables for each button using query selector to meld JS variable to each button in my HTML. 
let qbtn1 = document.querySelector("#Qbtn1");
let qbtn2 = document.querySelector("#Qbtn2");
let qbtn3 = document.querySelector("#Qbtn3");
let qbtn4 = document.querySelector("#Qbtn4");
let qbtn5 = document.querySelector("#Qbtn5");
let qbtn6 = document.querySelector("#Qbtn6");
let answer = document.querySelector(".answer");
// I added am event listener onto the click for each and every button, declaring a function that targets my answers array and displays it. 
qbtn1.addEventListener("click", function () {
    answer.innerHTML = answers[0].answer;
});

qbtn2.addEventListener("click", function () {
    answer.innerHTML = answers[1].answer;
});

qbtn3.addEventListener("click", function () {
    answer.innerHTML = answers[2].answer;
});

qbtn4.addEventListener("click", function () {
    answer.innerHTML = answers[3].answer;
});

qbtn5.addEventListener("click", function () {
    answer.innerHTML = answers[4].answer;
});

qbtn6.addEventListener("click", function () {
    answer.innerHTML = answers[5].answer;
});

let githubLink = document.getElementById("github");
githubLink.href = "https://github.com/samscupoftea";


// Sam's record shop.