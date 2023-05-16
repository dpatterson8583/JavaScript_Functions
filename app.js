console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0)
    {
        console.log("Count is negative: ", count);
        return count;
    }
    for (let i = 0; i <= count; i++) {
  
        if (i % 2 == 0) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age)
{
    if (userName == undefined && age == undefined)
    {
        return "No valid parameters privided";
    }

    var  aboveSixteen = `Congrats ${userName}, you can drive!`;
    var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    }
    else
    {
        console.log(aboveSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesian(x,y)
{
    let msg = "";

    if (x == 0)
    {
        msg = "(0,"+y+ ")" +" lies on the X axis";
    }

    if (y == 0)
    {
        msg = "(" + x + ",0)" + " lies on the Y axis";
    }

    if (x > 0 && y > 0)
    {
        msg = "(" + x + "," + y + ")" + " is in Quadrant 1";
    }

    if (x < 0 && y > 0) {
        msg = "(" + x + "," + y + ")" + " is in Quadrant 2";
    }

    if (x < 0 && y < 0) {
        msg = "(" + x + "," + y + ")" + " is in Quadrant 3";
    }

    if (x > 0 && y < 0) {
        msg = "(" + x + "," + y + ")" + " is in Quadrant 4";
    }

    console.log(msg);
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triCheck(side1, side2, side3) {
    var msg = "";
    if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
        msg = "Valid Triangle";

        if (side1 == side2 && side2 == side3) {
            msg = "Sides " + side1 + ", " + side2 + ", " + side3 + "  make an equilateral triangle";
        }
        else if (side1 == side2 || side1 == side3 || side2 == side3) {
            msg = "Sides " + side1 + ", " + side2 + ", " + side3 + "  make an isosceles triangle";
        }
        else {
            msg = "Sides " + side1 + ", " + side2 + ", " + side3 + "  make a scalene triangle";
        }
    }
    else {
        msg = "Invalid Triangle";
    }
    return msg;

}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage) {
    let avgData = planLimit / 30;
    let currDataAvg = usage / day;

    console.log("--------------------------------------------------------");
    console.log(day + " days used, " + (30 - day) + " days remaining");
    console.log("Average daily use: " + Number(avgData).toFixed(1) + " Gb/day");

    if (currDataAvg > avgData) {
        console.log("You are EXCEEDING your average daily use (" + Number(currDataAvg).toFixed(1) + "GB/day),");
        console.log("continuing this high usage, you'll exceed your data plan by ");
        console.log(Number(30 * currDataAvg).toFixed(2) - planLimit + " GB.");
        let remainGB = planLimit - (day * currDataAvg);
        let remainAvg = remainGB / (30 - day);
        console.log("To stay below your data plan, use no more than " + Number(remainAvg).toFixed(1) + " GB/day")
    }
    return null;
}
