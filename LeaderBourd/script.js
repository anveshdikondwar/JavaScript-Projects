

const form = document.querySelector(".options");
form.addEventListener("submit", (e) => { // 'e' is the event object.
    e.preventDefault();
    
    const first = e.target.children[0].value;
    const last = e.target.children[1].value;
    const fullname = first + " " + last; // concatenate
    const country = e.target.children[2].value;
    const score = e.target.children[3].value;
    if(first=="" || last==""){
        alert("please fill the Requirement")
    }

    addPlayer(fullname, country, score);
    remove();
});

const displayResult = document.querySelector(".display-result");


const addPlayer = (fullname, country, score) => {
    newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#90EE90"; 
    newDiv.innerHTML =
        `
    <span class="player-name">${fullname}</span>
    <span class="date">${generateDateAndTime()}</span>
    <span class="country">${country}</span>
    <span class="score">${score}</span>
    <button class="delete">🗑</button>
    <button class="increase">+5</button>
    <button class="decrease">-5</button>
    `
    displayResult.appendChild(newDiv);

    const increaseButton = newDiv.querySelector(".increase");
    const decreaseButton = newDiv.querySelector(".decrease");
    const scoreElement = newDiv.querySelector(".score");

    // Add +5
    increaseButton.addEventListener("click", () => {
        let currentScore = parseInt(scoreElement.textContent);
        currentScore += 5; // updating the value of current score
        scoreElement.textContent = currentScore;
    });

    // Decrease by -5
    decreaseButton.addEventListener("click", () => {
        let currentScore = parseInt(scoreElement.textContent);
        currentScore -= 5; // updating the value of current score
        scoreElement.textContent = currentScore;
    });
}

const remove = () => {
    const deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach((del) => {
        del.addEventListener("click", () => {
            del.parentElement.remove();
        });
    });
}


const generateDateAndTime = () => {
    let dateObject = new Date();

    let month = dateObject.toLocaleDateString("default", { month: "long" });
    let day = dateObject.getDate();
    let year = dateObject.getFullYear();
    let time = dateObject.toLocaleTimeString().slice(0, 8);

    let generateResult = `${month} ${day} ${year} ${time}`;
    return generateResult;
}