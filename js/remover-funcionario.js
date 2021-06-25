function apagarSelecionados() {
  var $selecionados = document.querySelectorAll('td [type="checkbox"]:checked') 
  for(let i = 0; i < $selecionados.length; i++) {
      $selecionados[i].parentNode.parentNode.remove() 
  }
}