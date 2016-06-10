function Pessoa() {
  this._nome = "";
  this._idade = "";
}

var pessoa = new Pessoa();


$(function(){
  mvvm.observe(pessoa);
})


