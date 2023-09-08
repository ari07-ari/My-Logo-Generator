
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square')

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


.then((data)=>{
    const filename = './example/logo.svg'

let myshape;

const {text,text_color, shape, shape_color} = data
if (shape === "triangle"){
 myshape = new Triangle(shape_color);
}
else if(shape ==='circle'){
    myshape = new Circle(shape_color);
}
else{
    myshape = new Square(shape_color);
}


const display=`
<svg width="300" height="200">
${myshape.CreateShape()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
</svg>
`


    fs.writeFile(filename, display, 
        (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        

});