import { readFileSync } from 'fs';
const { log } = console;

const data = JSON.parse(readFileSync('perseverance.json'));

/*
Welcome to the JS gymnasium :)

The 'data' const you see delcared on line 4 contains actual response data from NASA's Mars Rover API. 
It contains photos and associated metadata taken by the latest rover, 'Perseverance', on the martian
surface from early March 2022. 

This workout is about getting practice using the JS methods we know and love, 
but working with the kind of data structure you would face in the wild.

The exercise builds sequentially, comment by comment. 
You will most likely need to comment/un-comment your code as you go.
Enjoy!
*/

/*
First things first. 
Uncomment the 'log(data)' call below and execute this file. 
(Note that I used object destructuring on line 2 to give us easier access
to console.log)

Take a moment to get your bearings. 
What kind of data structure is 'data'? How can you tell? 
Note down some of your observations.
*/

/*
Is 'data' an object or an array?
Use the appropriate JS methods to find out. 
*/

/*
How many keys does 'data' have?
*/

/*
The 'data' object only has one key – 'photos'
Access and log its corresponding value – what kind of data structure is it? 
*/

/*
Create a constant called 'photos' that gets assigned the array stored at the 'photos' property of 'data'.
*/

/*
Refactor your const declaration to use object destucturing syntax. 
*/

/*
How many elements does 'photos' contain?
*/

/*
Let's take a more detailed look at 'photos' and its elements.
To make the console output more manageable for now, only log the first 3 elements. 
*/

// ---------------------------------------------------> ignore everything below this line

// import fetch from 'node-fetch';

// const API_URL =
//   'https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/photos?sol=367&api_key=t87vDMpczUbfooayg8nxdvDTUSKOgHSrbjr7nIdT';
// const getData = async () => await fetch(API_URL).then((raw) => raw.json());
// const formatJSON = (o) => JSON.stringify(o, null, 2);
// const data = await getData();
// fs.writeFileSync('perseverance.json', formatJSON(data), (err) => log(err));
