/*declaration*/

var allpages = document.querySelectorAll(".page"); //everything in page

//hide the subtopic content
function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none"; //hide page
    }
}

// Function to show selected page
let currentPage = 0;

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

//open the content, event delegation
const menu = document.querySelector("#menu");

menu.addEventListener("click", function(event) {

    if(event.target.id == "page1btn"){
        show(1);
    }

    else if(event.target.id == "page2btn"){
        show(2);
    }

    else if(event.target.id == "page3btn"){
        show(3);
    }

});

// Hide all pages when the website first loads
hideall();

//c note audio 
const Caudio = document.getElementById("CnoteAudio");
const CnoteBtn = document.getElementById("CnoteBtn");

CnoteBtn.addEventListener("click", function () {

    CnoteBtn.classList.add("playing"); //change button colour

    Caudio.currentTime = 0; //Resets the audio to the beginning
    Caudio.play();

    setTimeout(function () {
        CnoteBtn.classList.remove("playing"); //After 500 ms,change colour back
    }, 500);

});
//G note
const Gaudio = document.getElementById("GnoteAudio");
const GnoteBtn = document.getElementById("GnoteBtn");

GnoteBtn.addEventListener("click", function () {

    GnoteBtn.classList.add("playing");

    Gaudio.currentTime = 0;
    Gaudio.play();

    setTimeout(function () {
        GnoteBtn.classList.remove("playing");
    }, 500);

});

//F note
const Faudio = document.getElementById("FnoteAudio");
const FnoteBtn = document.getElementById("FnoteBtn");

FnoteBtn.addEventListener("click", function () {

    FnoteBtn.classList.add("playing");

    Faudio.currentTime = 0;
    Faudio.play();

    setTimeout(function () {
        FnoteBtn.classList.remove("playing");
    }, 500);

});
//quiz
const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);//When the user presses submit,run func check ans

const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,score=0;

//function
function CheckAns(){
score=0; 
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="F")score++;

//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="G")score++;

q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); //check q2 value retrieved
if(q3=="C")score++;

scorebox.innerHTML="Score: "+score;
//timeout 
setTimeout(function(){
    scorebox.innerHTML += "<br>Thanks for playing!";
},1000);
}

// Hamburger menu for mobile
const hamIcon = document.querySelector("#hamIcon");

hamIcon.addEventListener("click", function () { //Open Menu button is clicked, run the code
    menu.classList.toggle("showMenu");//If "showMenu" isn't in ul, add ccs class,if "showMenu" is already there, remove it.
});
