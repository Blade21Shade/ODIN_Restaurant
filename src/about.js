import * as styles from "./pageSpecificStyles/about.css";

function createContent() {
    const test = document.createElement("p");
    test.classList.toggle(styles["p-change"]);
    test.innerText = "About";
    return test;
}

export {createContent};