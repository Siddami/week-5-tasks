//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words= text.split(' ')
console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart)

//add Sugar at the end of you shopping cart if it has not been already added
console.log(shoppingCart.push('Sugar'))
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey
let allergic= true;
if (allergic=true){
    console.log(shoppingCart.splice(4,1))
    console.log(shoppingCart)
}
else{
    console.log('Not allergic to Honey')
}

//modify Tea to 'Green Tea'
shoppingCart[3]='Green Tea';
console.log(shoppingCart)


//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
let sorted= ages.sort()
console.log(sorted)

let minimumAge= sorted[0]
console.log(minimumAge)

let maximumAge= sorted.slice(10 -1)
console.log(maximumAge)

//Find the average age(all items divided by number of items)

// Find the range of the ages(max minus min)
let range = maximumAge - minimumAge;
console.log(range)

//Compare the value of (min - average) and (max - average), use abs() method 1.