const number = 2024;
const checkLeapyear = (year) =>{
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("Leap Year");
      }
      else {
        console.log("Not Leap Year");
      }
}
checkLeapyear(number);