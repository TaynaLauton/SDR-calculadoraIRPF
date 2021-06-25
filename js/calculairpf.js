var funcionarios = document.querySelectorAll(".funcionario");

for(var i = 0; i < funcionarios.length ; i++){
  var funcionario = funcionarios[i];
  var tdSalBruto = funcionario.querySelector(".info-salario");
  var tdDescPrev = funcionario.querySelector(".info-desconto");
  var tdQuantDepend = funcionario.querySelector(".info-dependentes")

  var descIrpf = funcionario.querySelector(".info-irpf");

  var salarioBruto = tdSalBruto.textContent;
  var descPrev = tdDescPrev.textContent;
  var quantDepend = tdQuantDepend.textContent;
  var deduDependente = 164.56;

  var salBaseIr = salarioBruto - descPrev - (quantDepend*deduDependente)

  if(salBaseIr <= 1903.98){
    var irpf = 0;
    foo(descIrpf, irpf)
  }

  if(salBaseIr >= 1903.99 && salBaseIr <= 2826.65){
    var irpf = ((salBaseIr * 7.5)/100) - 142.80;
    foo(descIrpf, irpf)
  }

  if(salBaseIr >= 2826.66 && salBaseIr <= 3751.05){
    var irpf = ((salBaseIr * 15)/100) - 354.80;
    foo(descIrpf, irpf)
  }

  if(salBaseIr >= 3751.06 && salBaseIr <= 4664.68){
    var irpf = ((salBaseIr * 22.5)/100) - 636.13;
    foo(descIrpf, irpf)
  }

  if(salBaseIr > 4664.68){
    var irpf = ((salBaseIr*27.5)/100) - 869.36;
    foo(descIrpf, irpf)
  }   
}

function calculaDescontoIrpf(salario, desconto, dependentes){
  var salBaseIr = 0
  var irpf = 0
  salBaseIr= salario - desconto - (dependentes*164.56)
  irpf = validaAliquota(salBaseIr)
  return irpf
}
/***função pra validar qual aliquota da tabela progressiva */
function validaAliquota(salBaseIr){
  if(salBaseIr <= 1903.98){
    var irpf = 0;
    return irpf.toFixed(2);
  }

  if(salBaseIr >= 1903.99 && salBaseIr <= 2826.65){
    var irpf = ((salBaseIr * 7.5)/100) - 142.80;
    return irpf.toFixed(2);
  }

  if(salBaseIr >= 2826.66 && salBaseIr <= 3751.05){
    var irpf = ((salBaseIr * 15)/100) - 354.80;
    return irpf.toFixed(2);
  }

  if(salBaseIr >= 3751.06 && salBaseIr <= 4664.68){
    var irpf = ((salBaseIr * 22.5)/100) - 636.13;
    return irpf.toFixed(2);
  }

  if(salBaseIr > 4664.68){
    var irpf = ((salBaseIr*27.5)/100) - 869.36;
    return irpf.toFixed(2);
  }  

}

/**Função que fixa o desconto em 2 casas decimais */
function foo(descIrpf, val) {
 descIrpf.textContent = val.toFixed(2)
}