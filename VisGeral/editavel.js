//DISPERÇÃO - JS
// window.innerWidth ===>> tamanho horizontal
// window.innerHeight ===>>> tamanho vertical
//tamanho do gráfico


var fatorEscalaX = window.innerWidth/1536;
var fatorEscalaY = window.innerHeight / 755;

var tamanhox = fatorEscalaX*950;
var tamanhoy = fatorEscalaY*475.3;

//posição do gráfico
var scatterplotX = fatorEscalaX * 450;
var scatterplotY = fatorEscalaY * 85;



//menu com legendas
var menuX = 30;
var menuY = 65;

//retângulo de seleção
var menuBoxWidth = 222;
var menuBoxHeigth = 22;
var menuBoxX = 30;
var menuBoxY = 14;

var espacoEntreMenus = 25;

//posição dos ícones da legenda
var figuresX = 230;
var figuresY = 21;


//posicao das escalas
var positionXAxisX = tamanhox/2;
var positionXAxisY = tamanhoy*1.1;

//Atencao com esse posicionamento, ele esta rotacionado
var positionYAxisX = -15;
var positionYAxisY = -15;



var textinhoX = menuX + 40; //mude na variável menuX para ficar alinhado
var textinhoY = 440;
var textinhoIndiceY = 60;
var textoVector = ["Cada forma geométrica representa",
                    "uma média de um estado.",
                    "Ao escolher uma disciplina,",
                    "os estados se reorganizam em ordem",
                    "crescente da média em tal disciplina."];
                    //"disciplina."];
