//A função abaixo escreve as estatísticas e o nome da cidade no model de estatísticas
// nomeCidade = string
// estatiscas = objeto
function escreverEstatisticas(nomeCidade, estatisticas) {

  var percentualAssalto           = estatisticas.percentualAssalto;
  var percentualFurto             = estatisticas.percentualFurto;
  var percentualViolenciaSexual   = estatisticas.percentualViolenciaSexual;
  var percentualHomicidio         = estatisticas.percentualHomicidio;
  var percentualVandalismo        = estatisticas.percentualVandalismo;

  $("#progressAssaltoSpan").html(percentualAssalto + "%");
  desenharBarra("#progressAssalto",percentualAssalto);
  $("#progressFurtoSpan").html(percentualFurto + "%");
  desenharBarra("#progressFurto",percentualFurto);
  $("#progressViolenciaSexualSpan").html(percentualViolenciaSexual + "%");
  desenharBarra("#progressViolenciaSexual",percentualViolenciaSexual);
  $("#progressHomicidioSpan").html(percentualHomicidio + "%");
  desenharBarra("#progressHomicidio",percentualHomicidio);
  $("#progressVandalismoSpan").html(percentualVandalismo + "%");
  desenharBarra("#progressVandalismo",percentualVandalismo);

  $("#nomeCidadeEstatisticas").html(nomeCidade);

}

function desenharBarra(idBarra, valor) {
  $(idBarra).css("width",valor+"%");

  //O código abaixo define qual será a classe da barra, o que dará a sua cor conforme a sua porcentagem
  var classeCorBarra = "";
  if (valor >= 50) {
    classeCorBarra = "progress-bar-danger";
  }
  else if (valor >= 15 && valor <= 49) {
    classeCorBarra = "progress-bar-warning";
  }
  else{
    classeCorBarra = "progress-bar-success";
  }

  $(idBarra).removeClass();
  $(idBarra).addClass("progress-bar progress-bar-striped active " + classeCorBarra);

}
