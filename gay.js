function generateResult() {
    const name = document.getElementById("nameInput").value.trim();
    const result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = "Please enter a name.";
        return;
    }

    const outcomes = ["Gay 🏳️‍🌈", "Straight ❤️"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);

    result.innerHTML = `${name} is <br><span style="font-size:32px;">${outcomes[randomIndex]}</span>`;
}