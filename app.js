// asim 2
let add = document.querySelector(".assign .classes-to-add");
let remove = document.querySelector(".assign .classes-to-remove");
let box = document.querySelector(".classes-list div");
let current = document.querySelector('[title="Current"]');

//add input
let newClass = [];
add.addEventListener("blur", function (e) {
  let value = add.value.toLowerCase();
  //Check if input empty or not
  if (value.trim() == "") {
    e.preventDefault();
    let empty = document.createTextNode("There is no class");
    box.appendChild(empty);
  } else {
    // if user add space in value we convert the vlaue to two classes
    if (value.includes(" ")) {
      value = value.split(" ");
      newClass.push(...value);
    } else {
      newClass.push(value);
    }
    // add classes to current elem
    current.classList.add(...newClass);
  }
  //clear input value
  add.value = "";
  showClass();
});

remove.addEventListener("blur", function (e) {
  let value = remove.value.toLowerCase();
  if (value.trim() == "") {
    e.preventDefault();
  } else {
    if (value.includes(" ")) {
      value = value.split(" ");
      current.classList.remove(value);
    } else {
      current.classList.remove(value);
    }
  }
  newClass.splice(newClass.indexOf(value), 1);
  box.removeChild(
    Array.from(box.childNodes).find((v) => v.innerHTML == value)
  );
  remove.value = "";
});

let showClass = function () {
  // clear box every using
  box.innerHTML = "";
  if (newClass.length > 0) {
    newClass.push(current.classList.item(0));
    newClass.push(current.classList.item(1));
    // sorting array
    newClass.sort();
    //create elements from my array
    for (let i = 0; i < newClass.length; i++) {
      let span = document.createElement("span");
      let spanText = document.createTextNode(newClass[i]);
      box.appendChild(span);
      span.appendChild(spanText);
    }
  }
};

// // Asim 3
// let parg = document.querySelector(".as3 p");
// parg.remove();

// let startDiv = document.createElement("div");
// let startText = document.createTextNode("Start");
// startDiv.setAttribute("class", "start");
// startDiv.setAttribute("title", "start element");
// startDiv.setAttribute("data-value", "start");

// document.querySelector(".our-element").prepend(startDiv);
// startDiv.appendChild(startText);

// let endDiv = document.createElement("div");
// let endText = document.createTextNode("End");
// endDiv.setAttribute("class", "end");
// endDiv.setAttribute("title", "end element");
// endDiv.setAttribute("data-value", "end");

// document.querySelector(".our-element").append(endDiv);
// endDiv.appendChild(endText);

// // Asim 4

// let as4 = document.querySelector(".as4 div");
// console.log(as4.childNodes[4]);

// // Asim 5

// document.addEventListener("click", function (e) {
//   //console.log(`I am a ${e.target.localName}`)
// });
