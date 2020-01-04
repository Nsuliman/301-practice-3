# 301-practice-3

__Q1- How long is the array returned by .map()? .filter()?__

The Answer : Based on the original data we works on , Map it will be as the same size of the truthy array , Filter it will be the same size or less based on the filtering condition , both methods dosn't change the original array.


__Q2- What does the following code do:__

$('button#primary').on('click', function() {
  placeOrder(shoppingCartItems);
});

The Answer : JQuery code , it will choose the buttom with id called "primary" and once clicked it , the fuction placeOrder will be invoked and excute with arguments "shoppingCartItems".

__Q3 - Write a function that takes an array of names as an argument and outputs each name in uppercase to the console.__

__The Answer :__

const arrayNames = ['Mohmoud', 'Razan', 'John','Ahmed','Raghad','Bashar'];

function upperCase(arr)        
{
    let arr2 = arr.map(element => {          
    
    return element.toUpperCase();
});

console.log(arr2);
} // End of uppercase function 

upperCase(arrayNames);