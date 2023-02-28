'use strict';

const shoppingList = ['dentifricio', 'cocacola', 'vitamine', 'lenticchie', 'caffè'];

const ul = document.getElementById('shopping-list');

let i = 0;
while (i < shoppingList.length) {
    //console.log(shoppingList[i]);
    const itemList = document.createElement('li');
    itemList.append(shoppingList[i]);
    ul.append(itemList);
    i++;
}

//variabili per aggiungere elementi alla lista
const inputAdd = document.getElementById('add-to-list');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');

let newItem = '';

addBtn.addEventListener('click',
    function () {
        if (inputAdd.valute !=''){
            let inputValue = inputAdd.value;
            shoppingList.push(inputValue);
            newItem = document.createElement('li');
            
            newItem.innterHTML = inputValue;
            newItem.append(shoppingList[i]);
            ul.append(newItem);
            
             

            console.log(newItem);
        }
    }
)
