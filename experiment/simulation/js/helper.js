/****
 * File containing helper functions
 *
 */

function newElementNS(tag, attr){
 elem = document.createElementNS('http://www.w3.org/2000/svg', tag);
 attr.forEach(function(item){
   elem.setAttribute(item[0], item[1]);
 });
 return elem;
}

function newElement(tag, attr){
 elem = document.createElement(tag);
 attr.forEach(function(item){
   elem.setAttribute(item[0], item[1]);
 });
 return elem;
}

function clearElem(elem){
  while(elem.firstChild){
    elem.removeChild(elem.lastChild);
  }
}

// Global variables width, height and radius need to be set before invoking this function
function displayCanvas(canvas, nfa){
  sine45 = 0.707;

  nodes = [];
  edges = [];

  nfa["edges"].forEach(function(elem, index){
    
    startX = width/10 + elem["start"]["positionX"]*width/8;
    startY = height/2 + elem["start"]["positionY"]*width/8;

    endX = width/10 + elem["end"]["positionX"]*width/8;
    endY = height/2 + elem["end"]["positionY"]*width/8;

    midX = 0;
    midY = 0;

    // console.log(elem["start"], startX, startY, endX, endY);

    linepoints = "";

    if(elem["type"] == "st"){

      midX = (startX + endX)/2;
      midY = (startY + endY)/2;

      linepoints = "M "+startX+" "+startY+" C "+startX+" "+startY
                  +", "+midX+" "+midY+", "+endX+" "+endY;

    }else if(elem["type"] == "tc"){

      midX = (startX + endX)/2;
      midY = (startY + endY)/2 - curveRadius;

      linepoints = "M "+startX+" "+startY+" C "+startX+" "+startY
                  +", "+midX+" "+midY+", "+endX+" "+endY;

    }else if(elem["type"] == "bc"){

      midX = (startX + endX)/2;
      midY = (startY + endY)/2 + 2*curveRadius;

      linepoints = "M "+startX+" "+startY+" C "+startX+" "+startY
                  +", "+midX+" "+midY+", "+endX+" "+endY;

    }

    edgeId = "edge_"+elem["start"]["name"]+"_"+elem["end"]["name"];

    edgeColor = "black";
    line = newElementNS('path', [
      ["id", edgeId],
      ["d", linepoints],
      ["fill", "none"],
      ["stroke", edgeColor]
    ]);

    linemarkerpoints = "";

    if(elem["type"] == "st"){

      if(elem["direction"] == "forward"){
        linemarkerpoints = (midX)+","+(midY-5)+" "+(midX+5)+","+(midY)+" "+(midX)+","+(midY+5);
      }else if(elem["direction"] == "backward"){
        linemarkerpoints = (midX)+","+(midY-5)+" "+(midX-5)+","+(midY)+" "+(midX)+","+(midY+5);
      }

    }else if(elem["type"] == "tc"){
      mid_y = (startY + endY)/2 - curveRadius/2.2;
      
      if(elem["direction"] == "forward"){
        linemarkerpoints = (midX)+","+(mid_y-5)+" "+(midX+5)+","+(mid_y)+" "+(midX)+","+(mid_y+5);
      }else if(elem["direction"] == "backward"){
        linemarkerpoints = (midX)+","+(mid_y-5)+" "+(midX-5)+","+(mid_y)+" "+(midX)+","+(mid_y+5);
      }

    }else if(elem["type"] == "bc"){
      mid_y = (startY + endY)/2 + curveRadius/1.1;
      
      if(elem["direction"] == "forward"){
        linemarkerpoints = (midX)+","+(mid_y-5)+" "+(midX+5)+","+(mid_y)+" "+(midX)+","+(mid_y+5);
      }else if(elem["direction"] == "backward"){
        linemarkerpoints = (midX)+","+(mid_y-5)+" "+(midX-5)+","+(mid_y)+" "+(midX)+","+(mid_y+5);
      }

    }

    linemarker = newElementNS('polygon', [
      ["id", "arrow_"+elem["start"]["name"]+"_"+elem["end"]["name"]],
      ["points", linemarkerpoints]
    ]);

    textline = newElementNS('text', [
      ["id", edgeId+"_text"]
    ]);
    textlinepath = newElementNS('textPath', [
      ["id", edgeId+"_textpath"],
      ["href", "#"+edgeId],
      ["startOffset", "25%"]
    ]);
    textlinepath.textContent = elem["text"];

    canvas.appendChild(line);
    canvas.appendChild(linemarker);
    textline.appendChild(textlinepath);
    canvas.appendChild(textline);

  });

  nfa["vertices"].forEach(function(elem, index){
    newnode = {
      "x": width/10 + elem["positionX"]*width/8,
      "y": height/2 + elem["positionY"]*width/8,
    };
    nodes.push(newnode);
  });

  nodes.forEach(function(elem){
    color = "black";
    stroke_width = "1px";
    fillColor = "#ffe4c4";

    circleElem = newElementNS('circle', [
      ["id", elem["text"]+"_circle"],
      ["cx", elem["x"]],
      ["cy", elem["y"]],
      ["r", radius],
      ["stroke", color],
      ["fill", fillColor],
      ["stroke-width", stroke_width]
    ]);

    canvas.appendChild(circleElem);

  });

}
