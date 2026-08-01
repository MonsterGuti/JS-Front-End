function toggle() {
    let button = document.querySelector(".button");
    let extra = document.getElementById("extra");

    if (extra.style.display === "block") {
        extra.style.display = "none";
        button.textContent = "More";
    } else {
        extra.style.display = "block";
        button.textContent = "Less";
    }
}