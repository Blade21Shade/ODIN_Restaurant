import "./pageSpecificStyles/home.css";

function createContent() {
    const test = document.createElement("p");
    test.innerText = "Home";
    return test;
}

export {createContent};