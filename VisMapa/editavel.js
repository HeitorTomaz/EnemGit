var fatorEscalaX = window.innerWidth/1536;

//raio circulo circunscrito ao hexagono
var raio = 30;
//separacoes verticais e horizontais entre os hexagonos
//calculadas em funcao do raio
var dx = raio * 1.85;
var dy = raio * 2.25;
var espessuraContorno = 7;

//range de cores dos exagonos
/*var corMinima = "rgb(230,255,255)";
var corDoMeio = "rgb(23,233,255)";
var corMaxima = "rgb(05,00,49)";
*/

var corMinima = {Matematica:"#ffc2c5",
                Linguagens:"#f1f2f7",
                Humanas:"#f3f1bf", 
                Natureza:"#cfe8d3",
                Redacao:"#e3cde2",
                Geral: "#ddd"};

var corDoMeio = {Matematica:"#d83038",
                Linguagens:"#8a93b4",
                Humanas:"#979669", 
                Natureza:"#76a37a",
                Redacao:"#aa6fa7",
                Geral: "#888"};

var corMaxima = {Matematica:"#3c1414",
                Linguagens:"#0e1016",
                Humanas:"#1c1a0b", 
                Natureza:"#0b170c",
                Redacao:"#1d111c",
                Geral: "#111"};


//posicao do mapa

var mapX = fatorEscalaX * 700;
var mapY = 6;




//gradiente
var gradientX = fatorEscalaX * 70;
var gradientY = 100;

var gradientWidth = 390;
var gradientHeight = 10;

var gradient2X = gradientX + gradientWidth/2;
var gradient2Y = gradientY;



var gradientText1X = gradientX + 30;
var gradientText1Y = gradientY + 10;

var gradientText2X = gradientX + gradientWidth - 22;
var gradientText2Y = gradientY + 10;






//menu com legendas
var menuX = 0;//30;
var menuY = 0;//65;


var espacoEntreMenus = 25;


//posicao do nome da visualizacao
var nameTextX = fatorEscalaX * 70;
var nameTextY = 90;

//posicao do nome da disciplina
var cartogramaTextX = nameTextX ;
var cartogramaTextY = nameTextY - 30;


//Para auxiliares:
//raio circulo circunscrito ao hexagono
var raioAux = 7;
//separacoes verticais e horizontais entre os hexagonos
//calculadas em funcao do raio
var AuxDx = raioAux * 1.85;
var AuxDy = raioAux * 2.25;
var espessuraContornoAux = 1;


var tamanhoAuxX = 16 * raioAux;
var tamanhoAuxY = 16 * raioAux;
var auxiliarShiftX = 5;


var pAuxX = 70// posição X comum entre os auxiliares
var pAuxY = 180// posição Y comum entre os auxiliares
var posicaoAux =[//{x: fatorEscalaX * 315 , y:-80}, //geral
         {x:fatorEscalaX * pAuxX, 			            y:pAuxY},
         {x:fatorEscalaX * pAuxX + tamanhoAuxX + 25, 	y:pAuxY}, 							//linguagens
         {x:fatorEscalaX * pAuxX, 			            y:pAuxY + tamanhoAuxY + 40},		//humanas				//Natureza
         {x:fatorEscalaX * pAuxX + tamanhoAuxX + 25, 	y:pAuxY + tamanhoAuxY + 40},		//redação
         {x:fatorEscalaX * pAuxX + tamanhoAuxX * 2 +50,	y:pAuxY },  						//matemática
         {x:fatorEscalaX * pAuxX + tamanhoAuxX * 2 +50,	y:pAuxY + tamanhoAuxY + 40}];	//geral
//var tradutor = {Linguagens: 1, Humanas: 2, Natureza: 3, Redacao: 4, Matematica: 5};

var textoVector = ["A cor de cada estado varia de acordo com a nota média.",
					"Quanto mais escuro, maior a média de um estado em relação a uma disciplina."];
                    //"relação a uma disciplina"];

var textinhoX = menuX + 70; //altere em "var menuX" para ficar alinhado
var textinhoY = 500;


//retângulo de seleção
var menuBoxWidth = tamanhoAuxX;
var menuBoxHeigth = tamanhoAuxY;
var menuBoxX = posicaoAux[0].x;
var menuBoxY = posicaoAux[0].y;
