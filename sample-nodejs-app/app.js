// jshint esversion: 6

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", function (req, res) {
  // console.log(__dirname) ;
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  num1 = Number(req.body.num1);
  num2 = Number(req.body["num2"]);
  switch (req.body.operator) {
    case "+":
      operator = add;
      break;
    case "x":
      operator = multiply;
      break;
    case "-":
      operator = subtract;
      break;
    case "/":
      operator = divide;
      break;
  }
  console.log(calculator(num1, num2, operator));
//   res.send(`<h2> the result is : ${calculator(num1, num2, operator)}</h2>` );
  res.send(`
    <h2>
     That was easy, your result is: ${calculator(num1, num2, operator)}
    </h2>
    <img src="https://image-repo-buraku.s3.eu-west-1.amazonaws.com/EC2.png" alt="EC2-Icon"class="center" width="10%" style="vertical-align:middle;margin:0px 100px">
    <p>
    There's no need for compliments </p>
    <p>I already know i'm the smartest app in the world hahaha ;)</p>
    <p>
    By the way I'm runningg on a single EC2 Instance
    </p>
    <p><a href="YOUR IP">BACK TO CALCULATOR...</a></p>
  `);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

