// add button
const addShowButton = document.querySelector(".add");
// label for the add button
const showInput = document.querySelector(".add-show input");
// unordered list (not yet visible)
const showList = document.querySelector(".show-list");
// span class for number of favorite shows
const showCount = document.querySelector(".number");

//The value property captures user input
//if parameter checks that input is not blank
//Create new list item
//Change innertext to show variable
//use append to add the item to the end of the unordered list
//Select all elements in document with variable shows
//Display number of elements in number class
addShowButton.addEventListener("click", function () {
    const show = showInput.value;
    if (show !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = show;
        showList.append(listItem);
        let shows = document.querySelectorAll(".show-list li");
        showCount.innerText = shows.length;
    }
});