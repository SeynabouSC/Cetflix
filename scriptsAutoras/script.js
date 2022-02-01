let $topicos = $('.sanfona h2');
let $p = $('.lista-filmes');
$topicos.click(e => {
  let $topico = $(e.currentTarget);
  $p = $topico.next(); 
  $p.slideToggle();
});

const botao = $("#botao-topo");
botao.click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
});