let input;

function setup() {
  let button, greeting;
  createCanvas(400, 400);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(calculate);

  greeting = createElement('h5', 'Please enter your equation');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function calculate()
{
  clear();
  let equation = input.value();
  let numbers = [];
  let total = 0;
  
  numbers = splitTokens(equation, ['+', '-', '*', '/']);
  
  let operator = splitTokens(equation, ['0', '1', '2', '3','4', 
                            '5', '6', '7', '8', '9']);
  
  if (operator == '+')
  {
    total = int(numbers[0]) + int(numbers[1]);
    text('Answer: ' + total, 200, 200);
  }
  else if (operator == '*')
  {
    total = int(numbers[0]) * int(numbers[1]);
    text('Answer: ' + total, 200, 200);
  }
  else if (operator == '/')
  {
    total = int(numbers[0]) / int(numbers[1]);
    text('Answer: ' + total, 200, 200);
  }
  else
  {
    equation = equation.replace('-', 'a');
    numbers = splitTokens(equation, 'a');
    total = int(numbers[0]) - int(numbers[1]);
    text('Answer: ' + total, 200, 200);
  }
  
}

/*function draw() 
{
  background(220);
}*/
