const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
var allpages = document.querySelectorAll(".page");

// Select all subtopic pages
function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }
}

let currentPage = 0;

// Function to show selected page
function show(pgno) {

    // If the page is already open, close it
    if (currentPage === pgno) {
        hideall();
        currentPage = 0;
        return;
    }

    // Otherwise show the selected page
    hideall();
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block";
    currentPage = pgno;
}

// Listen for button clicks
page1btn.addEventListener("click", function () {
    show(1);
});

page2btn.addEventListener("click", function () {
    show(2);
});

// Hide all pages when the website first loads
hideall();

// Get the "Open Menu" button
const hamBtn = document.querySelector("#hamIcon");

// Get the menu list
const menuItemsList = document.querySelector("nav ul");

// Connect button to toggleMenus function
hamBtn.addEventListener("click", toggleMenus);

// Toggle the navigation menu
function toggleMenus() {
    if (menuItemsList.classList.contains("menuShow")) {
        menuItemsList.classList.remove("menuShow");
        hamBtn.innerHTML = "Open Menu";
    } else {
        menuItemsList.classList.add("menuShow");
        hamBtn.innerHTML = "Close Menu";
    }
}
