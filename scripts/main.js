console.log("page loaded!")

var submitButton = document.getElementById('submit-button');
submitButton.onmouseup = getResults;

function getResults(){
  console.log("entered getResults");
  var yourElement = "";

  // counting the number of answers that refer to each element
  var numAir = 0;
  var numFire = 0;
  var numWater = 0;
  var numEarth = 0;

  // getting the results from each question
  //question 1
  if (document.getElementById('air-1').checked){
    numAir += 1;
  }
  else if (document.getElementById('fire-1').checked){
    numFire += 1;
  }
  else if (document.getElementById('water-1').checked){
    numWater += 1;
  }
  else if (document.getElementById('earth-1').checked){
    numEarth += 1;
  }

  //question 2
  if (document.getElementById('air-2').checked){
    numAir += 1;
  }
  else if (document.getElementById('fire-2').checked){
    numFire += 1;
  }
  else if (document.getElementById('water-2').checked){
    numWater += 1;
  }
  else if (document.getElementById('earth-2').checked){
    numEarth += 1;
  }

  //question 3
  if (document.getElementById('air-3').checked){
    numAir += 1;
  }
  else if (document.getElementById('fire-3').checked){
    numFire += 1;
  }
  else if (document.getElementById('water-3').checked){
    numWater += 1;
  }
  else if (document.getElementById('earth-3').checked){
    numEarth += 1;
  }

  //question 4
  if (document.getElementById('air-4').checked){
    numAir += 1;
  }
  else if (document.getElementById('fire-4').checked){
    numFire += 1;
  }
  else if (document.getElementById('water-4').checked){
    numWater += 1;
  }
  else if (document.getElementById('earth-4').checked){
    numEarth += 1;
  }

  //question 5
  if (document.getElementById('air-5').checked){
    numAir += 1;
  }
  else if (document.getElementById('fire-5').checked){
    numFire += 1;
  }
  else if (document.getElementById('water-5').checked){
    numWater += 1;
  }
  else if (document.getElementById('earth-5').checked){
    numEarth += 1;
  }

  // compares values to see which is highest
  if(numFire >= numAir){
    if(numFire >= numEarth){
      if(numFire >= numWater){
        if(numFire > 0) yourElement += "fire";
		else yourElement += "?? Answer the questions please";
      }
      else{
        yourElement += "water";
      }
    }
    else if(numEarth >= numWater){
      yourElement += "earth";
    }
    else{
      yourElement += "water";
    }
  }
  else if(numAir > numEarth){
    if(numAir > numWater){
      yourElement += "air";
    }
    else{
      yourElement += "water";
    }
  }
  else{
    if(numEarth >= numWater){
      yourElement += "earth";
    }
    else{
      yourElement += "water";
    }
  }

  // displaying the results
  var displayResults = document.getElementById('results');
  displayResults.innerHTML = "Your element is " + yourElement + "!";


}


