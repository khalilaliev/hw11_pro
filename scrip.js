const theAverageNumber = () => {
  const firstInput = + prompt("Enter first number:");
  const seconfInput = + prompt("Enter second number:");
  const thirdInput = + prompt("Enter third number:");

  const summOfNumber = firstInput + seconfInput + thirdInput;

  if (!isNaN(firstInput) && !isNaN(seconfInput) && !isNaN(thirdInput)) {
    const average = summOfNumber / 3;
    console.log("Average number:", average);
  } else {
    console.log("Enter a number!");
  }
};

theAverageNumber();
