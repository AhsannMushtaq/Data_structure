var container = document.getElementById("array");
 
// Function to generate the array of blocks
function generatearray() {
 
  // Creating an array
  var arr = [];
 
  // Filling array with random values
  for (var i = 0; i < 20; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var val = Number(Math.ceil(Math.random() * 100));
    arr.push(val);
  }
 
  // Sorting Array in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });
 
  for (var i = 0; i < 20; i++) {
    var value = arr[i];
 
    // Creating element div
    var array_ele = document.createElement("div");
 
    // Adding class 'block' to div
    array_ele.classList.add("block");
 
    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;
 
    // Creating label element for displaying
    // size of particular block
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
 
    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}
 
// Asynchronous BinarySearch function
async function BinarySearch(delay = 300) {
  var blocks = document.querySelectorAll(".block");
  var output = document.getElementById("text");
 
  //Extracting the value of the element to be searched
  var num = document.getElementById("fname").value;
 
  //Colouring all the blocks dark blue
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#09588e";
  }
 
  output.innerText = "";
 
  // BinarySearch Algorithm
 
  var start = 0;
  var end = 19;
  var flag = 0;
  while (start <= end) {
    //Middle index
    var mid = Math.floor((start + end) / 2);
    blocks[mid].style.backgroundColor = "#FF4949";//yellow
 
    //Value at mid index
    var value = Number(blocks[mid].childNodes[0].innerHTML);
 
    // To wait for .1 sec
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
 
    //Current element is equal to the element
    //entered by the user
    if (value == num) {
      window.alert ("ELEMENT FOUND ") ;
      blocks[mid].style.backgroundColor = "#13CE66";// light green found colour
      flag = 1;
      break;
    }
    //Current element is greater than the element
    //entered by the user
    if (value > num) {
      end = mid - 1;
      blocks[mid].style.backgroundColor = "#dfd630";//colour yellow back
    } else {
      start = mid + 1;
      blocks[mid].style.backgroundColor = "#dfd630";//color yellow  forward
    }
  }
  if (flag === 0) {
    window.alert ("ELEMENT NOT FOUND") ;
  }
}
 
// Calling generatearray function
generatearray();

