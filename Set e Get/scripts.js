class aluno {
  constructor(nome, materia, semestre) {
    this.nome = nome;
    this.materia = materia;
    this.semestre = semestre;
  }

  get nomeAluno() {
    return this.nome;
  }

  set nomeAluno(nome) {
    this.nome = nome;
  }
}

let emerson = new aluno("", "programação", 5);

emerson.nomeAluno = "emerson";

console.log(emerson.nomeAluno);
console.log(emerson);
