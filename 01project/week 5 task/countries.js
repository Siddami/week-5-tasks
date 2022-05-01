const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  //In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')){
  console.log('ETHIOPIA')
}
else{
  console.log(countries.push('Ethiopia'))
}

//Find the middle country(ies) in the countries array
let midCountry= countries[Math.floor(countries.length/2)]
console.log(`The middle country is ${midCountry}`)

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let midIndex = Math.floor(countries.length / 2);
const firstHalf = countries.splice(0, midIndex + 1);
const secondHalf = countries.splice(-midIndex);
console.log(firstHalf);
console.log(secondHalf);