const messSalma=61;
const heightSalma=1.55;
const messShihab=85;
const heightShihab=1.56;

const BMISalma = messSalma / heightSalma ** 2;
const BMIShihab = messShihab / heightShihab ** 2;

console.log(BMISalma ,BMIShihab);

if (BMISalma > BMIShihab) {
    console.log("Salma's BMI is higher than Shihab !");
  }  else{
        console.log("Shihab's BMI is higher than Salma !")
    }
    
