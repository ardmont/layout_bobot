# layout_bobot
Este repositório contém os arquivos relacionados ao layout do front-end do projeto B.O Bot (https://www.facebook.com/hackfestbobot). 
 Possui desde os códigos necessários para estruturação e estilização da página até os scripts necessários para a manipulação dos
elementos DOM, inicialização, geolocalização e pesquisa do mapa.
 Todo o layout foi feito utilizando a framework de css bootstrap (http://getbootstrap.com/).
 O layout é responsivo, assim, sua visualização é automaticamente ajustada para dispositivos móveis.

## Estrutura do repositório: 

  ### Arquivo index.html
  Código HTML utilizado para a estruturação da página e o posicionamento dos seus elementos.
  
  ### Diretório Styles
  Contém os arquivos CSS responsáveis pela estilização dos elementos da página.
  
  ### Diretório Scripts
  Contém os scripts utilizados pela página
    
  #### jquery-3.1.0.min.js 
  Arquivo da biblioteca JQuery, na versão 3.1 (https://jquery.com/)
      
  #### scriptMapa.js
  Script carregado no arquivo index.html para inicialização do mapa, como também, habilitação da geolocalização do usuário e 
  da pesquisa por local.
  
  #### funcoes_dom.js
  Este arquivos possui funções para manipular os elementos no DOM do layout, por exemplo, o modal com as estatísticas.
  
  ### Diretório bootstrap
  Diretório com todos os arquivos do framework bootstrap
