// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //HEADER DIV
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header');

    //DATE
    const theDate = document.createElement('span');
    theDate.classList.add('date');
    theDate.textContent = "MARCH 13, 2020";
    headerContainer.appendChild(theDate);

    //H1
    const ltH = document.createElement('h1');
    ltH.textContent = "Lambda Times";
    headerContainer.appendChild(ltH);

    //TEMP
    const theTemp = document.createElement('span');
    theTemp.classList.add('temp');
    theTemp.textContent = '98°';
    headerContainer.appendChild(theTemp);

    return headerContainer;
}

const addtoDom = document.querySelector('.header-container');
addtoDom.appendChild(Header());
