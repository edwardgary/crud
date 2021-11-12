let el, i;
let data = [
  { titulotarea: "Matematica", descripciontarea:"tarea entragada 1"},
  { titulotarea: "matematica", descripciontarea: "Tarea 1" },
  { titulotarea: "matematica", descripciontarea: "Tarea 2" },
  { titulotarea: "matematica", descripciontarea: "Tarea 3" },
  { titulotarea: "matematica", descripciontarea: "Tarea 4" }
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.titulotarea} ${x.descripciontarea}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#fname").value;
  let ln = document.querySelector("#lname").value;
  data = [...data, { titulotarea: fn, descripciontarea: ln }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].titulotarea;
  document.querySelector("#lname").value = data[i].descripciontarea;
}

function update() {
  data[i].titulotarea = document.querySelector("#fname").value;
  data[i].descripciontarea = document.querySelector("#lname").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}
 function view() {
 window.location="tarea.html";
}
 renderItem();