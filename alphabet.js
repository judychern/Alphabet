//Build a function that takes a string as an argument and returns the character that is most used in the string
//Call a property of an object using the string representation of the name of the property: object name['propertyName']
//Or var propName = 'a'; objectName[propName]

var string = "abggggjjyt";

var alphabet = {
	a: 0,
	b: 0,
	g: 0,
	j: 0,
	y: 0,
	t: 0
};

var arrayCount = [];

function maxCharacter(string){

for (i=0; i<string.length; i++){
	var character = string[i];
	console.log(alphabet[character]);
	var count = alphabet[character]++;
	//console.log(count);
};
// console.log(Object.keys(alphabet));
// console.log(alphabet.a);
	//console.log(alphabet.g);
for (var letters in alphabet) { 
    arrayCount.push(alphabet[letters]);
};
//console.log(arrayCount);
var largest = Math.max.apply(Math, arrayCount);
//console.log(largest);
 for( var letterCount in alphabet ) {
        if( alphabet[letterCount] === largest ){
            console.log( 'property=' + letterCount + ' value=' + alphabet[letterCount]);
            var mostUsedChar = letterCount;
        }
    }
    return mostUsedChar;
    console.log(mostUsedChar);
};
maxCharacter(string);

