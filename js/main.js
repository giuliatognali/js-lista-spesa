'use strict';

const shoppingList = ['dentifricio', 'cocacola', 'vitamine', 'lenticchie', 'caffè'];

const ul = document.getElementById('shopping-list');


let i = 0;
while(i < shoppingList.length){
    console.log(shoppingList[i]);
    const itemList =document.createElement('li');
    itemList.append(shoppingList[i]);
    ul.append(itemList);
    i++;
}