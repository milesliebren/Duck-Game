//Get the target element
const duck = document.body.querySelector("#duck");

//Add the click event listener
duck.addEventListener("click", () => 
{
  increaseScore();
  moveDuck();
});

//Increase score by 1
const increaseScore = () => 
{
    //Get the content of the target element. The current value for score
    const score = document.body.querySelector("#score-counter").innerHTML;
    //Get the element to increase the value
    const scoreHTML = document.body.querySelector("#score-counter");
    //Cast the score value to Number type
    let count = Number(score);
    //Set the new score to the target element
    scoreHTML.innerHTML = count + 1;
};

//Get a random number
const getRandomNum = (num) => 
{
    return Math.floor(Math.random() * Math.floor(num));
}

//Move the duck randomly 
const moveDuck = () => {
    //const w = window.innerWidth;
    //const h = window.innerHeight;
    const backgroundImage = document.getElementById("backgroundImage");
    const w = backgroundImage.offsetWidth;
    const h = backgroundImage.offsetHeight;
    duck.style.left = getRandomNum(w-duck.offsetWidth) + "px";
    duck.style.top = getRandomNum(h-duck.offsetHeight) + "px";
  };

