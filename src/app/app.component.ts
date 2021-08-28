import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Delhi', 'Mumbai', 'Banglore'];
  filteredOptions: Observable<string[]> | undefined;

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}


// const submitBtn = document.getElementById('submitBtn');
// const viewListBtn = document.getElementById('viewListBtn');
// const numPoems = document.getElementById('numOfPoems');
// const numPoemsError = document.getElementById('numPoemsError');
// let startingPoem = document.getElementById('startingPoem');
// const startingPoemError = document.getElementById('startingPoemError');
// const poemOrderList = document.getElementsByName('poemOrderRadio');

// const fs = require('fs');
// let inputPoemList = fs.readdirSync('./syllabaryPoems');
// inputPoemList = inputPoemList.reduce(function (filtered: any[], currentElement: string) {
//     if (currentElement.slice(-5) === '.json') {
//         currentElement = currentElement.slice(0, -5);
//         filtered.push(currentElement);
//     }
//     return filtered
// }, []);

// // Add submit button event listeners
// submitBtn.addEventListener('click', checkNumPoems);
// submitBtn.addEventListener('click', checkStartPoem);
// submitBtn.addEventListener('click', setPoemOrder);
// submitBtn.addEventListener('click', goToLoading);
// viewListBtn.addEventListener('click', goToList);

// // Number of poems check
// function checkNumPoems() {
//     let warningMessage = '';

//     if (numPoems.value === '' || numPoems.value == null) {
//         warningMessage += 'Number of poems is required';
//     } 
//     else if (isNaN(numPoems.value)) {
//         warningMessage += 'Entry needs to be a number';
//     } 
//     if (numPoems.value > inputPoemList.length) {
//         warningMessage += 'There are not enough available poems to fulfil that request. Please select a number less than ' + inputPoemList.length;
//     } 

//     numPoemsError.innerHTML = warningMessage;
//     return;
// };

// // Starting poem check
// function checkStartPoem() {
//     let warningMessage = '';
//     let startingPoemSplit = startingPoem.value.split('-');

//     if (startingPoem.value === '' || startingPoem.value == null) {
//         warningMessage += 'Starting poem is required';
//     } else {
//         if (startingPoemSplit.length != 3 || startingPoemSplit.includes('')) {
//             warningMessage += 'Poem was not entered in the correct format. Please enter poem in the format: "x-x-x" where x is a number'
//         } else {
//             if (isNaN(startingPoemSplit[0]) || isNaN(startingPoemSplit[1]) || isNaN(startingPoemSplit[2])) {
//                 warningMessage += 'Format is correct but not all the characters were numbers\nPlease enter poem in the format: "x-x-x" where x is a number'
//             } else {
//                 if ((!(inputPoemList).includes(startingPoem.value))) {
//                     warningMessage += 'Poem not in list. Click the poem list button for information about available poems';
//                 }
//             }
//         }
//     }
//     startingPoemError.innerHTML = warningMessage;
//     return;
// };

// // Assign radio check box to poem order variable
// function setPoemOrder(event) {
//     for (var index = 0, orderLen = poemOrderList.length; index < orderLen; index++) {
//         if (poemOrderList[index].checked) {
//             const poemOrder = poemOrderList[index];
//             localStorage.setItem("poemOrder", JSON.stringify(poemOrder.value));
//         }};
//         return;
// }

// // Define submit button functionality
// function goToLoading(event) {
//     if (numPoemsError.innerHTML == '' && startingPoemError.innerHTML == '') {
//         localStorage.setItem("inputPoemList", JSON.stringify(inputPoemList));
//         localStorage.setItem("numOfPoems", JSON.stringify(numOfPoems.value));
//         localStorage.setItem("startingPoem", JSON.stringify(startingPoem.value));
//         location.href = 'loadingPage.html';
//     };  
//     return;
// };

// function goToList(event) {
//     location.href = 'poemList.html';
// }
