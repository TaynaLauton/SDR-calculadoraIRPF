var botaoAdicionar = document.querySelector("#adicionar-funcionario");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var funcionario = obtemFuncionarioDoFormulario(form);

    var erros = validaFuncionario(funcionario);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaFuncionarioNaTabela(funcionario);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemFuncionarioDoFormulario(form) {

    var funcionario = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        salario: form.salario.value,
        desconto: form.desconto.value,
        dependentes: form.dependentes.value,
        irpf: calculaDescontoIrpf(form.salario.value, form.desconto.value, form.dependentes.value)

    }

    return funcionario;
}

function montaTr(funcionario) {
    var funcionarioTr = document.createElement("tr");
    funcionarioTr.classList.add("funcionario");

    funcionarioTr.appendChild(montaTdInput());
    funcionarioTr.appendChild(montaTd(funcionario.nome, "info-nome"));
    funcionarioTr.appendChild(montaTd(funcionario.cpf, "info-cpf"));
    funcionarioTr.appendChild(montaTd(funcionario.salario, "info-salario"));
    funcionarioTr.appendChild(montaTd(funcionario.desconto, "info-desconto"));
    funcionarioTr.appendChild(montaTd(funcionario.dependentes, "info-dependentes"));
    funcionarioTr.appendChild(montaTd(funcionario.irpf, "info-irpf"));

    return funcionarioTr;
}

function montaTdInput(){
  var td = document.createElement('td');
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "select");
  input.setAttribute("id", "select");
  input.setAttribute("class", "select-checkbox")
  td.appendChild(input);

  return td;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaFuncionario(funcionario) {

    var erros = [];

    if (funcionario.nome.length == 0) {
        erros.push("O nome n??o pode ser em branco");
    }

    if (funcionario.cpf.length == 0) {
        erros.push("O campo CPF n??o pode ser em branco");
    }

    if (funcionario.salario.length == 0) {
        erros.push("O campo sal??rio n??o pode ser em branco");
    }

    if (funcionario.desconto.length == 0) {
        erros.push("O campo desconto n??o pode ser em branco");
    }
    if (funcionario.dependentes.length == 0) {
      erros.push("O campo dependentes n??o pode ser em branco");
  }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaFuncionarioNaTabela(funcionario) {
    var funcionarioTr = montaTr(funcionario);
    var tabela = document.querySelector("#tabela-funcionarios");
    tabela.appendChild(funcionarioTr);
}