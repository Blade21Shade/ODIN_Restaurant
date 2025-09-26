import * as styles from "./pageSpecificStyles/menu.css";

function createContent() {
    const test = document.createElement("p");
    test.classList.toggle(styles["p-change"]);
    test.innerText = "Menu";
    return test;
}

export {createContent};