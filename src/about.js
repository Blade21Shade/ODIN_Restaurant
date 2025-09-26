import "./pageSpecificStyles/about.css";

function createContent() {
    const test = document.createElement("p");
    test.innerText = "About";
    return test;
}

export {createContent};