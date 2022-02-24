//Get the button:
mybutton = document.getElementById("backToTop");

/** Nastav celýmu dokumentu event listener, který poslouchá, až se načte DOM, pak zavolá funkci loadAfterDom */
document.addEventListener("DOMContentLoaded", loadAfterDom);

/**
 * Nastav filterSelection kvuli filtru, ziskej vsechny navigacni tagy co jsou v dropdownu a kazdemu z nich nastav event listener na click, selectu nastav event listener na change
 */
function loadAfterDom() {
    filterSelection("vse");
    const elements = document.getElementsByClassName("dropdown-item");
    for (let index = 0; index < elements.length; index++) {
        elements[index].addEventListener("click", navigationItemClick);
    }
    document
        .getElementById("selectType")
        .addEventListener("change", selectChange);
}

/**
 * Ziskej z konkretniho navigacniho elementu atribut, ktery lze ziskat z event objektu, nastav filterSelection dle hodnoty atributu a nastav i select
 * @param {*} event Event objekt
 */
function navigationItemClick(event) {
    let value = event.target.getAttribute("data-value");
    filterSelection(value);
    document.getElementById("selectType").value = value;
}

/**
 * Nastav hodnotu selectu pri jeho zmene
 * @param {*} event Event objekt
 */
function selectChange(event) {
    let value = event.target.value;
    filterSelection(value);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ----------------------
// Filtr výběru reference
// ----------------------
function filterSelection(value) {
    var x, i;
    x = document.getElementsByClassName("filterClass");
    if (value == "vse") value = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(value) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
