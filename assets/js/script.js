"use strict";

const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach((element) => element.addEventListener(eventType, callback));
};

/**
 * Toggle Navbar Function
 */
const toggleNavbar = () => {
  if (window.innerWidth >= 1200) return;

  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

/**
 * DOM Elements
 */
const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-navlink]");

const elemArr = [overlay, menuCloseBtn, menuOpenBtn];

/**
 * Add Event Listeners
 */
addEventOnElements(elemArr, "click", toggleNavbar);
addEventOnElements(navbarLinks, "click", toggleNavbar);
