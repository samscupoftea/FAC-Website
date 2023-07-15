let musicData = {
    "Jeff Buckley": {
        album: "Grace",
        year: 1994,
        whyLove: "Because it's amazing!"
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









const answers = [{
    answer: ` I studied Philosophy at university and realized that I enjoy the process of trying to solve problems both big and small.`,



}, {
    answer: `Creativity is very important to me and while developing my coding skills, I have had the opportunity to not only express part of myself, but to see the ideas of others. This has really inspired me to deepen my knowledge and skill-set.`,

}, {
    answer: `"The practice of mindfulness allows us to become aware of the stream of thoughts and feelings that we usually identify with as our self."`,

}, {
    answer: `"You can’t control how you feel. But you can always choose how you act."`,

}, {
    answer: `"Awakening is not changing who you are, but discarding who you are not."`,

}, {
    answer: `"Mindfulness is the key to transforming your relationship with life."`,

}];

let qbtn1 = document.querySelector("#Qbtn1");
let qbtn2 = document.querySelector("#Qbtn2");
let qbtn3 = document.querySelector("#Qbtn3");
let qbtn4 = document.querySelector("#Qbtn4");
let qbtn5 = document.querySelector("#Qbtn5");
let qbtn6 = document.querySelector("#Qbtn6");
let answer = document.querySelector(".answer");

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

