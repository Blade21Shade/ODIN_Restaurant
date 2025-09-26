import "./styles.css";
import {createContent as createHome} from "./home.js";
import {createContent as createMenu} from "./menu.js";
import {createContent as createAbout} from "./about.js";

// DOM Manipulation
const contentContainer = document.querySelector("#content");

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");

homeBtn.addEventListener("click", () => {
    contentContainer.replaceChildren(createHome());
});

menuBtn.addEventListener("click", () => {
    contentContainer.replaceChildren(createMenu());
});

aboutBtn.addEventListener("click", () => {
    contentContainer.replaceChildren(createAbout());
});

contentContainer.replaceChildren(createHome());