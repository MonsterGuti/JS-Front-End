function loadingBar(percent) {
    let completed = percent / 10;

    let bar = "";

    for (let i = 0; i < completed; i++) {
        bar += "%";
    }

    for (let i = completed; i < 10; i++) {
        bar += ".";
    }

    if (percent === 100) {
        console.log("100% Complete!");
        console.log(`[${bar}]`);
    } else {
        console.log(`${percent}% [${bar}]`);
        console.log("Still loading...");
    }
}