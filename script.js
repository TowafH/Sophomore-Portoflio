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
  const pTag = document.getElementById("P"); 
  if (pTag) {
    pTag.innerText = "Moggged"; 
  } else {
    console.error("Could not find a <p> tag within the #foodbank element.");
  }
  });

document.getElementById("BE").addEventListener("click", function() {
  const pTag = document.getElementById("P"); 
  if (pTag) {
    pTag.innerText = "Mewing"; 
  } else {
    console.error("Could not find a <p> tag within the #foodbank element.");
  }
  });

document.getElementById("TAEHS").addEventListener("click", function() {
  const pTag = document.getElementById("P"); 
  if (pTag) {
    pTag.innerText = "Sigma"; 
  } else {
    console.error("Could not find a <p> tag within the #foodbank element.");
  }
  });

document.getElementById("foodbank").addEventListener("click", function() {
  resetColors(); // Reset colors first
  changeFBColor(); // Change the clicked image color
  // ... rest of your code
});

document.getElementById("BE").addEventListener("click", function() {
  resetColors(); // Reset colors first
  changeBEColor(); // Change the clicked image color
  // ... rest of your code
});

document.getElementById("TAEHS").addEventListener("click", function() {
  resetColors(); // Reset colors first
  changeTAEHSColor(); // Change the clicked image color
  // ... rest of your code
});