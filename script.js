let allInput = document.querySelectorAll("input[type=text]");
let elements = document.getElementsByClassName("element");
for (let element of elements) {
  element.addEventListener("click", () => {
    for (let input of allInput) {
      input.style.outline = "none";
    }
    element.querySelector("input[type=text]").style.outline = "solid #00ffff";
  });
}

const changeColor = (name,value) => {
  const areaNum = name.substring(5,8);
  const area = document.getElementById("area" + areaNum);
  area.style.backgroundColor = value;
  const input = area.getElementsByTagName("input");
  input[1].style.backgroundColor = value;
}

let newAreaNum = 5;
const addFunction = () =>{
  const newArea = document.createElement("div");
  newArea.classList.add("element");
  newAreaNum = String("000" + newAreaNum).slice(-3);
  newArea.setAttribute("id","area" + newAreaNum);
  document.getElementById("elements").appendChild(newArea);

  const newColorPicker = document.createElement("input");
  newColorPicker.setAttribute("type", "color");
  newColorPicker.setAttribute("name", "color" + newAreaNum);
  newColorPicker.setAttribute("onchange", "changeColor(this.name,this.value)");
  newArea.appendChild(newColorPicker);

  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newArea.appendChild(newInput);
  newInput.style.position = "relative";
  newInput.style.left = "10px";
  newAreaNum++;
  allInput = document.querySelectorAll("input[type=text]");
  let newElements = document.getElementsByClassName("element");
  for (let element of newElements) {
    element.addEventListener("click", () => {
      for (let input of allInput) {
        input.style.outline = "none";
      }
      element.querySelector("input[type=text]").style.outline = "solid #00ffff";
    });
  }

};
