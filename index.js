//import files from classes and other files
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square')

//creates promp for the user to input their data
inquirer
.prompt([
{
    type: 'input',
    name: "text",
    message: 'What is the text of the logo? (enter up to three characters)',
},
{
    type: 'input',
    name: "text_color",
    message: 'What text-color do you want?',
},
{
    type: 'list',
    name: "shape",
    message: 'Pick a shape:',
    choices: ['circle', 'triangle', 'square'],
},
{
    type: 'input',
    name: "shape_color",
    message: 'What shape-color do you want?',
},
])

//obtain the data
.then((data)=>{
    //create a file with the name logo.svg
    const filename = './example/logo.svg'

    //create a variable
    let myshape;

    //take the data and make them constants
    const {text,text_color, shape, shape_color} = data

    //if the user input matches a shape then it will call the class of the shape 
    //set the parameters 'the color of the shape'
    if (shape === "triangle"){
        myshape = new Triangle(shape_color);
    }
    else if(shape ==='circle'){
        myshape = new Circle(shape_color);
    }
    else{
        myshape = new Square(shape_color);
    }

    //this creates the content inside the svg logo, with the data inputed but the user
    const display=`
    <svg width="300" height="200">
    ${myshape.CreateShape()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>
    `

    //creates the file and throws and error if not run properly, otherwise "success"
    fs.writeFile(filename, display, 
        (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        

});