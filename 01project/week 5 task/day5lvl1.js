//Declare an empty array
const empty = Array();
console.log (empty)

//Declare an array with more than 5 number of elements
const countriez = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
console.log(countriez)

//Find the length of your array
let lengthOfArray = countriez.length;
console.log(lengthOfArray)

//Get the first item, the middle item and the last item of the array
let firstItem = countriez[0];
console.log (firstItem)

let middleItem = countriez[10/2];
console.log (middleItem)

let lastItem = countriez.length - 1;
console.log (countriez[lastItem])

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [
    'Damilola',
    304,
    1.50,
    true,
    false,
    'Titilope',
]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM', 'Oracle','Amazon']

//Print the array using console.log()
console.log (itCompanies)

//Print the number of companies in the array
console.log(itCompanies.length)

//Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany =Math.floor(itCompanies.length/2);
let lastCompany = itCompanies.length - 1;
console.log(firstCompany)
console.log(middleCompany)
console.log(itCompanies[lastCompany])

//Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[lastCompany])

//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase()) 
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[lastCompany].toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(",") + ' care big IT companies')

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let userInput=prompt('Enter Company')
// let regexMatch = (/facebook | google | microsoft | apple | ibm  | oracle | amazon/gi)
// let result = regexMatch.test(itCompanies);

// if (result=true){
//     console.log(`${userInput} exists in the array`)
// }
// else{
//     console.log(`company does not exist in the array`)
// }

//Filter out companies which have more than one 'o' without the filter method
let wordz = itCompanies.filter((e) => 
      e.includes('oo')
)
console.log(wordz);

//Sort the array using sort() method
let sorting= itCompanies.sort();
console.log(sorting)

//Reverse the array using reverse() method
let reversing= itCompanies.reverse();
console.log(reversing)

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))

//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

//Remove the first IT company from the array
console.log(itCompanies.shift())

//Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3,1))

//Remove the last IT company from the array
console.log(itCompanies.pop())

//Remove all IT companies
console.log(itCompanies.slice(0,0))
//OR
console.log(itCompanies.splice())


