class imovel {
  constructor(endereco, numero, bairro, cidade, tipo, area, locado) {
    this.endereco = endereco;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.tipo = tipo;
    this.area = area;
    this.locado = locado;
  }
}

function saveHouse() {
  let endereco = document.querySelector("input[name='endereco']").value;
  let numero = document.querySelector("input[name='numero']").value;
  let bairro = document.querySelector("input[name='bairro']").value;
  let cidade = document.querySelector("input[name='cidade']").value;
  let tipo = document.querySelector("select[name='type'] option:checked").text;
  let area = document.querySelector("input[name='area']").value;
  let locado = document.querySelector("input[name='locado']:checked").value;

  let house = new imovel(endereco, numero, bairro, cidade, tipo, area, locado);

  let newlist = document.createElement("li");

  let listContent = document.createElement("p");
  listContent.innerText =
    "Endereço: " +
    house.endereco +
    "\nNúmero: " +
    house.numero +
    "\nBairro: " +
    house.bairro +
    "\nCidade: " +
    house.cidade +
    "\nTipo: " +
    house.tipo +
    "\nÁrea: " +
    house.area +
    " m²\n";

  let alugado = document.createElement("span");

  if (house.locado == "Sim") {
    alugado.innerText = "ALUGADO";
    alugado.style.backgroundColor = "red";
    alugado.style.color = "white";
  } else {
    alugado.innerText = "DISPONÍVEL";
    alugado.style.backgroundColor = "green";
    alugado.style.color = "white";
  }

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover";
  removeButton.setAttribute("onclick", "removeHouse(this)");

  newlist.appendChild(alugado);
  newlist.appendChild(listContent);
  newlist.appendChild(removeButton);

  document.getElementById("house-list").appendChild(newlist);

  let form = document.querySelector("form");
  form.reset();
}

function removeHouse(button) {
  let liToRemove = button.parentNode;
  document.getElementById("house-list").removeChild(liToRemove);
}
