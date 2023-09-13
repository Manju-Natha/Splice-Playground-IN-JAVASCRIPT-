let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let updatedArray = document.getElementById("updatedArray");
let spliceBtnEl = document.getElementById("spliceBtn");

function createStringdataAppend() {
    let stringdata = JSON.stringify(arr);
    updatedArray.textContent = stringdata;
}
createStringdataAppend();

spliceBtnEl.onclick = function() {
    let startIndexvalue = startIndexInput.value;
    let deleteIndexvalue = deleteCountInput.value;
    let itemIndexvalue = itemToAddInput.value;

    if (startIndexvalue === "") {
        alert("Please enter start index");
    }
    if (deleteIndexvalue === "") {
        deleteIndexvalue = 0;
    }
    if (itemIndexvalue === "") {
        arr.splice(parseInt(startIndexvalue), parseInt(deleteIndexvalue));
    } else {
        arr.splice(parseInt(startIndexvalue), parseInt(deleteIndexvalue), itemIndexvalue);
    }

    startIndexInput.avlue = "";
    deleteCountInput.value = "";
    itemToAddInput.value = "";
    createStringdataAppend();

}