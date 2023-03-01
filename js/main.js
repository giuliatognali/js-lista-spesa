'use strict';

const shoppingList = ['dentifricio', 'cocacola', 'vitamine', 'lenticchie', 'caffè'];

const ul = document.getElementById('shopping-list');

//While
let i = 0;
while (i < shoppingList.length) {
    //console.log(shoppingList[i]);
    const itemList = document.createElement('li');
   /*  itemList.append(shoppingList[i]);*/
    itemList.innerText = shoppingList[i];
    ul.append(itemList);
    i++;
}

//Do while

/* let y = 0;

do {
    const itemList = document.createElement('li');
     itemList.innerText = shoppingList[y];
     ul.append(itemList);
     y++;

} while (y < shoppingList.length); */


//variabili per aggiungere elementi alla lista
const inputAdd = document.getElementById('add-to-list');
const addBtn = document.getElementById('add-btn');

/* let newItem = ''; */

addBtn.addEventListener('click',
    function () {
        if (inputAdd.valute !=''){
            //let inputValue = inputAdd.value;
            shoppingList.push(inputAdd.value);
            const newItem = document.createElement('li');
            newItem.append(shoppingList[i]);
            newItem.innerHTML = inputAdd.value;
            ul.append(newItem);
            console.log(newItem);
        }
    }
)
