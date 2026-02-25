//Author: Jana Schroth
//Application: Larger or Smaller?
//Use: simple conditional statement

/*
Create an application that accepts two integers within two separate prompts.
Then, display only the larger of the two within the browser window. 
Don’t forget to handle the fact that the two could be equal.
*/

//User Prompt

let int1 = parseInt (window.prompt ('Enter the distance to your first destination (miles): '))
let int2 = parseInt (window.prompt ('Enter the distance to your second destination (miles): '))

//Conditional statement
if (int1 > int2) {
    window.alert (`The distance to your first destination is farther, with approximately ${int1} miles.`)
} else if (int2 > int1) {
    window.alert (`The distance to your second destination is farther, with approximately ${int2} miles.`)
} else {
    window.alert ('Both destinations are equal in distance.')
}