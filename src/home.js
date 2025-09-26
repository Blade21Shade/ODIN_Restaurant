import * as styles from "./pageSpecificStyles/home.css";

function createContent() {
    const test = document.createElement("p");
    test.classList.toggle(styles["p-change"]);
    test.innerText = "Home";
    return test;
}

export {createContent};