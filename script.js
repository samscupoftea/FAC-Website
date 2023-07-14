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
