const form = document.getElementById("bmi-form");
form.addEventListener('submit', displayBMI);

function displayBMI(e) {
  e.preventDefault();

  let health = document.getElementById('health-state');
  if(health!==null) health.remove();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = calculateBMI(height, weight);
  let healthState = getHealthState(bmi);

  document.getElementById("calculation").innerText = `BMI: ${bmi.toFixed(2)}`;
  let p = document.createElement('p');
  p.className='result';
  p.id='health-state';
  p.innerText=`Your Health State is ${healthState}`;
  form.appendChild(p);

  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";

}

function getHealthState(bmi) {
  if(bmi < 18.5) {
    return "underweight";
  } else if(bmi <= 25) {
    return "normal";
  } else if(bmi <= 30) {
    return "overweight";
  } 
  return "obese";
}

function calculateBMI(height, weight) {
  return (weight * 703) / (height**2);
}