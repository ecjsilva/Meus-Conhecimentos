function salvar() {
  let area = document.querySelector("input[name='area']").value;
  let num = document.querySelector("input[name='num']").value;
  let bairro = document.querySelector("input[name='bairro']").value;
  let cidade = document.querySelector("input[name='cidade']").value;
  let newListValue = document.createElement("li");
  newListValue.innerText = `${area}m², número ${num} (${bairro} - ${cidade})`;
  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover";
  removeButton.setAttribute("onclick", "remove(this)");
  newListValue.appendChild(removeButton);
  document.getElementById("house-list").appendChild(newListValue);
}
function remove(button) {
  let liToRemove = button.parentNode;
  document.getElementById("house-list").removeChild(liToRemove);
}
