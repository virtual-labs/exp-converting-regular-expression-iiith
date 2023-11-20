/*****
 * File containing main logic to display DFA
 *
 */

width = 500;
height = 200;
radius = 10;
curveRadius = 100;

RE = [RE1, RE2, RE3];

// dfa = [dfa1, dfa2, dfa3, dfa4, dfa5];
reIndex = 0

// inputIndex = 0
inputPointer = -1

nodes = []
edges = []

function refreshCanvas(){
  clearElem(canvas);

  if(inputPointer != -1){
    displayCanvas(canvas, RE[reIndex]["nfa"][inputPointer]);
  }

  // curr = ""
  // if(inputPointer != -1){
  //   console.log("before", inputPointer, curr);
  //   // console.log(dfa[dfaIndex]["input"]);
  //   curr = dfa[dfaIndex]["input"][inputIndex]["states"][inputPointer];
  //   console.log("after", inputPointer, curr);
  // }

  // DFADescriptionContainer = document.getElementById("DFA_description_container");
  // clearElem(DFADescriptionContainer);
  // span = newElement("font", [["id", "DFA_description"], ["color", textColor]]);
  // text = document.createTextNode(dfa[dfaIndex]["description"]);
  // span.appendChild(text);
  // DFADescriptionContainer.appendChild(text);

  // res = displayCanvas(canvas, dfa[dfaIndex], inputPointer, curr);

  // nodes = res[0]
  // edges = res[1]
}

function resetInput(){
  inputIndex = 0
  inputPointer = -1

  refreshInput();
}

function refreshInput(){
  inputContainer = document.getElementById("input_container");
  clearElem(inputContainer);
  textColor = "black";
  text = document.createTextNode(RE[reIndex]["expression"]);
  inputContainer.appendChild(text);

}

function resetStack(){
  stack = document.getElementById("stack_list");
  clearElem(stack);
}

function addToStack(str){
  stack = document.getElementById("stack_list");
  listElem = newElement("li", []);
  textNode = document.createTextNode(str);
  listElem.appendChild(textNode)
  stack.appendChild(listElem);

}

function removeFromStack(){
  stack = document.getElementById("stack_list");
  if(stack.firstChild){
    stack.removeChild(stack.lastChild);
  }
}

window.addEventListener('load', function(e){
  canvas = document.getElementById("canvas1");

  refreshInput();
  refreshCanvas();
  resetStack();

  // Event listener for changing RE
  changeRE = document.getElementById("change_re");
  changeRE.addEventListener("click", function(e){
    clearElem(canvas);
    reIndex = reIndex + 1;
    if(reIndex >= RE.length){
      reIndex = 0;
    }
    resetInput();
    refreshCanvas();
    resetStack();
  });

  // Event listener for next
  next = document.getElementById("next");
  next.addEventListener("click", function(e){
    if(inputPointer != RE[reIndex]["nfa"].length - 1){
      inputPointer = inputPointer + 1;
      refreshInput();
      refreshCanvas();
      addToStack(RE[reIndex]["nfa"][inputPointer]["description"]);
    }
  });

  // Event listener for prev
  prev = document.getElementById("prev");
  prev.addEventListener("click", function(e){
    if(inputPointer != -1){
      inputPointer = inputPointer - 1;
      refreshInput();
      refreshCanvas();
      removeFromStack();
    }
  });

});
