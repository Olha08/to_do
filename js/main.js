var completed_count = 0;

function add_todo(){
  var to_do = "";
  while (to_do === ""){
    to_do = prompt('Please add to-do');
  }

  if (typeof to_do != "string") return;
  var li = document.createElement('li');
  li.innerHTML = "<input type='checkbox' class='checkbox'/> <span>"+to_do+"</span> | <button class='delete-todo' >X</button>";
  document.getElementById("to-do-html").appendChild(li);
  re_init();
}

function delete_todo(e){
  e.currentTarget.parentNode.remove();
}

function switch_todo(e){
  if (e.currentTarget.checked == true){
    e.currentTarget.parentNode.classList.add("crossed_out_text");
    completed_count++;
  } else {
    e.currentTarget.parentNode.classList.remove("crossed_out_text");
    completed_count--;
  }
  update_count();
}

function init(){
  document.getElementById("add-todo").addEventListener("click", add_todo);
}

function re_init(){

  btn = document.getElementsByClassName("delete-todo");
  checkbox = document.getElementsByClassName("checkbox");

  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', delete_todo);
  }

  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', switch_todo);
  }
}

function update_count() {
  document.getElementById("completed_count").innerText = "Amount of selected todos:" + completed_count;
}