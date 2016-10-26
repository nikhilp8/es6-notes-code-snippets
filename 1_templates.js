let music = 'rap';
let id = '007';

let url = "https://" + music + "/" + id;

console.log(url);

let diffUrl = `https://${music}/${id}`;
console.log(diffUrl);	


// use back ticks instead of single or double quotes, followed by that syntax with ${}