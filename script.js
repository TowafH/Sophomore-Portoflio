var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



function changeFBColor(){
  var FBColor = document.getElementById('foodbank');
  FBColor.style.backgroundColor = "#f5c4a3";
}

function changeBEColor(){
  var FBColor = document.getElementById('BE');
  FBColor.style.backgroundColor = "#d5c6be";
}

function changeTAEHSColor(){
  var FBColor = document.getElementById('TAEHS');
  FBColor.style.backgroundColor = "#f3dc9b";
}



function resetColors(){
  document.getElementById('foodbank').style.backgroundColor = "#ffffff";
  document.getElementById('BE').style.backgroundColor = "snow";
  document.getElementById('TAEHS').style.backgroundColor = "white";
}



document.getElementById("foodbank").addEventListener("click", function() {
  resetColors(); 
  changeFBColor(); 
  const pTag = document.getElementById("P"); 
  if (pTag) {
    pTag.innerText = "From my experience at the MS217 Food Pantry, I would volunteer alongside my friends and other dedicated volunteers, including some of my former teachers. It was truly eye-opening to see their willingness to help the community without expecting any compensation. The opportunity to directly provide food to families in need filled me with happiness, knowing that I played a part in making sure they had access to food they may not have otherwise had was incredibly rewarding."
  } else {
    console.error("Could not find a <p> tag within the #foodbank element.");
  }
});


document.getElementById("BE").addEventListener("click", function() {
  resetColors();
  changeBEColor(); 
  const pTag = document.getElementById("P"); 
  if (pTag) {
    pTag.innerText = "During my Internship at Braathe Enterprises, I was tasked to work on several projects. These projects can be research-based or projects about topics I am passionate about. So far, I’ve conducted research on HR in 5 countries. I researched and created a slideshow to present my findings. Currently, I am working on learning JavaScript following the free course on Scrimba, “Learn JavaScript.” This project culminated into a paper and portfolio, where I displayed the apps that I have built and what I have learned throughout the course."
  } else {
    console.error("Could not find a <p> tag within the #foodbank element.");
  }
});


document.getElementById("TAEHS").addEventListener("click", function() {
  resetColors();
  changeTAEHSColor(); 
  const pTag = document.getElementById("P"); 
  if (pTag) {
    pTag.innerText = "Student within the initial implementation of the Mayor's Initiative for CareerWise and Future Ready program. Designed a portfolio that documents my journals, site visits, guest speaker visits, and career plans. I developed career readiness skills through conducting presentations and mock interviews."
  } else {
    console.error("Could not find a <p> tag within the #foodbank element.");
  }
});