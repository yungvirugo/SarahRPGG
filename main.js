//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variáveis de controle da história
microchip = false;

//função que define o conteúdo textual da narrativa
function getStory () {
	return{

	currentScene: "intro", 
	intro: {
		title: "Introdução",
		image: "img/cabecalho__Catandolares.gif",
		story: "<h3>'<i>Uma cidade um tanto quanto peculiar distante de qualquer outro município, estava com um ar de esperança e renovação, afinal fora aberto um novo estabelecimento dentre os outros seis  já existentes.Desta vez era um studio de cabeleireiro, com uma estética totalmente distante do que os interioranos da tal cidade estavam acostumados.</i>'</h3><h3 O salão tinha uma proposta pretensiosa  e os cartazes de propaganda do lado de fora prometiam rejuvenescimento, modernidade e até  fama. Já o salão, apresentava -se até simplista, com objetos e utensílios em  cores primas.  A parede e o chão sempre com uma paleta de preto e branco e todas as possíveis variações</i>'</h3><h3 E claro, o mais importante ,o dono do local, o cabeleireiro Avellar Rodriguez .Tratava-se  de um tipo sexy e misterioso, ninguém naquela cidade o conhecia, afinal quem era Avellar?</i>'</h3><h3 Todos criavam histórias sobre ele, era sinistro, cabelo preto azulado para trás, gel cola e uma pequena entrada na sua cabeça. Ademais aparentava possuir uns 42 anos, era um gay afeminado que sempre estava a usar calças listradas com suspensório, apesar do seu jeito sinistro e do seu rosto com uma beleza exótica, era cativante ao público da pequena cidade interiorana que estranhamente o desejava, talvez pelo seu ar  autêntico que o diferenciava dos demais. 
</i>'</h3><hAvellar Rodrigues, o  cabeleireiro um tanto performático, está em seu salão executando suas simplistas e cotidianas limpezas de resíduos capilares e algumas nojeiras a mais, seu nome, Avellar Rodriguez.</i>'</h3><h3Ouvindo um dos seus álbuns favoritos da Madonna, pensa em relembrar suas performances de uma nova maneira, como nunca tinha feito antes, na verdade além de arte e rítmica seu desejo maior era em vingança sobre seu passado.</i>'</h3><h3Por fim ele ouve a sua estridente campainha tocar, era uma cliente</i>'</h3><h3. A Doris, senhora fofoqueira e insensível que sempre aparecia por lá.</
A</h3>",
		choices: [
	 	{
			choice: "Abrir a porta",
			destination: 'abriraporta'
	 	},
		},
		{
			choice: "nâo abrir",
			destination: 'nâoabrirs'
		}
	 	]
	},

	continuarEstudando: {
		title: "Abrir a Portao",
		story: "<h3></i>'</h3><h3Avellar com um semblante malicioso, vai direto à porta com um andar certeiro. Pede para Doris ir ao lavatório.</i>'</h3><h3Enquanto isso ele se olha no espelho e pensa qual será a sua próxima ação, algo mais sarcástico ou trágico? qual será a melhor opção.</i>'</h3><h3Avellar: Doris, minha querida, senta na cadeirinha aqui que hoje a noite você vai arrasar. Farei um corte de atriz de cinema.</i>'</h3><h3Doris;  AIII eu espero mesmo faz um tempo que não mudo meu visu!</i>'</h3><h3

</h3>",
		choices: [
	 	{
			choice: "Doris fica indignadaê",
			destination: 'dorisficaindignada'
		},
		{
			choice: "Doris fica brava",
			destination: 'dorisficabrava'
		}
	 	]
	}
	 	]
	},

	furarOlhos: {
		title: "Nâo abrir",
		story: "<h3>5 "</i>'</h3><h3Avellar se estabiliza olhando fixamente para o chão, assustado com seus terríveis pensamentos e desejo puramente egoístas. Claro, Doris sem dúvidas era uma das velhas mais chatas existentes na face da terra, mas não era motivo para performar com as suas tripas ânsias. Pois então no meio do caminho, seus pés não o deixam prosseguir. A porta continua fechada e a cliente vai embora reclamando pelo fato de não ter seu penteado até a noite.</i>'</h3><h3fim.</i>'</h3><h3”

,
		choices: [
	 	{
			choice: "Começar Novamente",
			destination: 'intro'
		}
	 	]
	},

	doris fica indignadas: {
		title: "Doris Indignada",
		story: "<h3></i>'</h3><hDoris fica extremamente chateada, afinal era casamento de seu filho. Dentro de sua cabeça só vinha o gato de fazer seu filho passar vergonha e claro sair feia nas fotos. Vai cabisbaixa pagar pelo corte de cabelo. Avellar gargalha quando ela se vai, então contenta-se minimamente.</i>'</h3><hfim.

DORIS BRAVA
</h3>",
		choices: [
	 	{
			choice: "Continuar",
			destination: 'sucessoRolar01'
		}
	 	]
	},


		}
		]
	},

	DORIS BRAVA: {
		title: "Enfurrecida",
		story: "<h3><h3></h3><h3”Doris se enfurece e ofende Avellar sem dó nem piedade, Definitivamente ela não gostou do corte ridículo feito propositalmente pelo maluco cabeleireiro. Ele ri de canto de lábio, Doris ja tinha sacado que aquilo não era algo normal a se acontecer, sentiu um ar pesado, porém sua raiva e angústia de tanta feiura capilar, sumiram a qualquer medo aparente.</h3><h3”</h3><h3”Doris: Safado você nem sabe cortar cabelo, nem curso você tem, já entendi qual é a sua. UMA FARSA!!!!</h3><h3”</h3><h3”A cliente se aproxima e enfia o dedo na cara dele, dizendo… ou melhor gritando.</h3><h3”Doris: Além do mais meu queridissimo Avellar, VOCE È &%¨#%$@%9**</h3><h3”

",
		choices: [
		{
				choice: "Continuar",
				destination: "dominarMente"
		}
		]
	},

	continuarCatanteve: {
		title: "Continuar Assistindo Catantevê",
		story: "<h3T</h3><h3”Doris se enfurece e ofende Avellar sem dó nem piedade, Definitivamente ela não gostou do corte ridículo feito propositalmente pelo maluco cabeleireiro. Ele ri de canto de lábio, Doris ja tinha sacado que aquilo não era algo normal a se acontecer, sentiu um ar pesado, porém sua raiva e angústia de tanta feiura capilar, sumiram a qualquer medo aparente.</h3><h3”</h3><h3”Doris: Safado você nem sabe cortar cabelo, nem curso você tem, já entendi qual é a sua. UMA FARSA!!!!</h3><h3”</h3><h3”A cliente se aproxima e enfia o dedo na cara dele, dizendo… ou melhor gritando.</h3><h3”Doris: Além do mais meu queridissimo Avellar, VOCE È &%¨#%$@%9**</h3><h3”
/h3>",
		choices: [
	 	{
			choice: "Rolar Dados",
			destination: 'rolarDados01'
		}
	 	]
	},

	rolarDados01: {
		title: "",
		story: "",
		choices: [
			{
				choice: "",
				destination: ""
			}
		]
	},

	sucessoRolar01: {
		title: "Obrigada por ajudar Avellar",
		story: "<h3>Agora uremos decidir agora o destino de Avellar de outra dorma. Vamos la?.</h3><h õ",
		choices: [
		{
			choice: "Rolar Dados",
			destination: 'rolarDados02'
		}
	 	]
	},

	falhaRolar01: {
		title: "Falha no Testee",
		story: "<h3></h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'dominarMente'
		}		]
	},

	pegarCopo: {
		title: "Avellar decide agir",
			story: "<h3>Tn </Após refletir rapidamente com a situação ocorrida de sua chata cliente, ele decide ir ao ataque da forma mais poética e singela que poderia ter, trazendo um ar autentico para o que agora viria. Um assasinato em performance ao som de madonna.</h3><h3”

</h3>",
		choices: [
		{
			choice: "Rolar Dados",
			destination: "rolarDados03"
		}
		]
	},

	rolarDados02: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar02: {
		title: "Sucessoe",
		story: "<h3>Certeiro, com uma simples mirada no cranio com um penteado recem ajeirado. Doris é acertada na testa e sangra até a mortes</h3>",
		choices: [
		{
			choice: "Esconder o corpos",
			destination: 'rolarFalha01'
		},
		{
			choice: "Transformar dejetos de Doris em um Manequim",
			destination: 'conversarPai'
		}
		]
	},

	rolarDados03: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	irDormir: {
		title: "Enquanto o caos esta estabelecido",
		story: "<hAvellar começa a sentir um intenso estase e começa a ficar meio estazziado diante da situaçao, pois entao conclui que faria alguma coisa até a deciçao do que fazer com a cliente Doris no chao. >a?</h3>",
		choices: [
		{
			choice: "Desligar a TV",
			destination: "desligarTV"
		},
		{
			choice: "Beber um energetico",
			destination: "chacoalharPai"
        }
		]
	}	]
	},

	desligarTV: {
		title: "Desligar a TV'",
		story: "<h3>A tv parecia que o observava durante o ato, porem so a deliga e agora ira agir para de algum moso se livrar...</h3>",
		choices: [
		{
			choice: " Escylpir Doris",
			destination: 'esculpirdoris'
		},
		{
			choice: "EEsconder o corpo",
			destination: 'esconderocorpo'
		}
		]
	},

		]
	},

	explicarSituacao: {
		title: "Explicar Situação",
		story: "<h3>-- o telefone toca e a sua mae percebe que seu filho está aflito e pergunta!</h3><h3>",
		choices: [
		{
			choice: "Ouvir Ligação da Mãe",
			destination: "ouvirLigacao"
		},
		{
			choice: "Continuar com o corpo
			destination: "continuarcomocorpo"
		}
		]
	},

	discussaoLeve: {
		title: "PEDAÇOS DE DORIS",
		story: "<h3> Depois de inesperadas situaçoes e o tempo que ja tivera passado. Decide em finalizar Doris, afinal a parte performatica e artistica era a que mais lhe atraia.</h3>",
		choices: [
		{
			choice: "Ela virara um manequim",
			destination: "manequima"
		},
		{
			choice: "aSeus residos serao usados para uma pintura expressionista",
			destination: "pinturaexpressionista"
		}
		]
	},

	ouvirLigacao: {
		title: "Ouvir Ligação da Mãe",
		story: "<h3>VtrAo estar oyinco a voz de sua progenitora enquanto olha uma desconhecida morta em seu slao, ele se ve fora de si e decide....?</h3>",
		choices: [
		{
			choice: "Continuar",
			destination: 'contarConspiracao'
		}
		]
	},


	},


	},

	rolarDados04: {
		title: "",
		story: "",
		choices: [
		{
			choice: "",
			destination: ""
		}
		]
	},

	sucessoRolar04: {
		title: "Render",
		story: "<h3>Ele sem duvidas estava sem chao sem nenhum apoio, parecia que algum espirito estava nele......pelo seu terrivel passado ele decide se render. porem como legitma defesa.</h3>",
		choices: [
		{
			choice: "ligar para a delegacia""
			",
			destination: 'ligarparaadelegacia'
		},
		{
			choice: "ligar e fugir",
			destination: 'ligarefugir'
		}
		]
	},


	irFinal: {
		title: "Ir pro Final",
			story: "<h3>Seify'>Fi Avellar faleceu.</h3>",
		choices: [
		{
			choice: "Começar Novamente",
			destination: 'intro'
		}
		]
	},


	instrucoes: {
		title: "Instruções",
		story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "intro"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	},

	inicio: {
		title: "Inicio",
		story: "<h3></h3>",
		choices: [
		{
			choice: ".",
			destination: "inicio"
		}
		]
	},

	creditos: {
		title: "Créditos",
		story: "<h2 align='center'>Créditos</h2><h3>Esta é aventura-solo é parte do <a href='https://operarpg.com.br/product/opera-rpg-modulo-basico/' target='blank' class='classe1'>OPERA RPG 1ª Edição</a></center></p><p><b>ISBN:</b> 85-89161-05-6</p><p><b>Programação:</b> Leonardo Antônio de Andrade</p><p><b>Autores:</b></p><p>&nbsp;&nbsp;Leonardo Antônio de Andrade</p><p>&nbsp;&nbsp;Rogério de Mello Godoy</p><p><b>Ilustrações: </b>Marcelo Braga</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='jamendo.com/track/1839683/conspiracy-theorist' target='blank' class='classe1'>Trecho da Faixa Conspiracy Theorist, de Nick Gordy</a></h3>",
		choices: [
		{
			choice: "Começar a Aventura!",
			destination: "intro"
		},
		{
			choice: "Tela Inicial",
			destination: "inicio"
		}
		]
	}
	
	}
}

//Programação dos Botões e Seleção das Opções Inciais (Iniciar a aventura, Nova janela com site, Instruções e Créditos)
document.addEventListener ('DOMContentLoaded', function() {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');

	//Iniciar a Aventura
	button0.addEventListener('click', function() {
		story = getStory ();
		renderScene ();
	})

	//Nova Janela com Site
	button1.addEventListener('click', function() {
		if (cont == 0)
		{
			window.open("https://operarpg.com.br", '_blank');
		}
		else
		{
			story = getStory ();
			renderScene ();
		}
	})

	//Instuções
	button2.addEventListener('click', function() {
		if (cont == 0)
		{
			instrucoes = true;
		}
		story = getStory ();
		renderScene ();
	})

	//Créditos
	button3.addEventListener('click', function() {
		if (cont == 0)
		{
			creditos = true;
		}
		story = getStory ();
		renderScene ();
	})
})


//Programação para Atualização do códigu HTML, Controle de Aletoriedade e de Itens
function renderScene()
{
	//verificacao de cenas
	var image = "";
	var titulo = "";

	if (instrucoes)
	{
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos)
	{
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	//Renderização de Imagem
	if (!story[story.currentScene].image)
	{
		image = "<img></img>";
	}

	//Redenrização de Título
	if (story[story.currentScene].title == "Introdução")
	{
		titulo = story[story.currentScene].title;
	}

	//Variáveis de Aletoriedade
	dado1 = Math.floor(Math.random() * 6 + 1);
	dado2 = Math.floor(Math.random() * 6 + 1);
	dados = dado1 + dado2;

	//Controle de Aletoriedade
	switch (story.currentScene)
	{
		case ('rolarDados01'):
			if (dados <= 8)
			{
				story.currentScene = 'sucessoRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else
			{
				story.currentScene = 'falhaRolar01';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
		case ('rolarDados02'):
			if (dados <= 8)
			{
				story.currentScene = 'sucessoRolar02';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else
			{
				story.currentScene = 'dominarMente';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
		case ('rolarDados03'):
			if (dados <= 8)
			{
				story.currentScene = 'continuarEstudando';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <=8 (Sucesso)');
			}
			else
			{
				story.currentScene = 'assistirTelevisao';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
		case ('rolarDados04'):
			if (dados <= 6) {
				story.currentScene = 'sucessoRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 6 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 6 (Falha)');
			}
		break;
		case ('rolarDados05'):
			if (dados <= 6) {
				story.currentScene = 'sucessoRolar05';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 6 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar04';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 6 (Falha)');
			}
		break;
		case ('rolarDados06'):
			if (dados <= 6) {
				story.currentScene = 'sucessoRolar06';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 6 (Sucesso)');
			}
			else {
				if (dados == 12) {
					story.currentScene = 'falhacriticaRolar06';
					swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' = 12 (Falha Crítica)');
				}
				else
				{
					story.currentScene = 'falhaRolar06';
					swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 6 (Falha)');
				}
			}
		break;
		case ('rolarDados07'):
			if (dados == 12) {
				story.currentScene = 'sucessoRolar07';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' = 12 (Sucesso Crítico)');
			}
			else {
				story.currentScene = 'falhaRolar07';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' < 12 (Falha)');
			}
		break;
		case ('rolarDados08'):
			if ((dados + 6) >= 12) {
				story.currentScene = 'sucessoRolar08';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' + 6 = ' + (dados + 6) + ' >= 12 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar08';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' + 6 = ' + (dados + 6) + ' < 12 (Falha)');
			}
		break;
		case ('rolarDados09'):
			if (dados <= 7) {
				story.currentScene = 'sucessoRolar09';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 7 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar09';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 7 (Falha)');
			}
		break;
		case ('rolarDados10'):
			if (dados <= 8) {
				story.currentScene = 'sucessoRolar10';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' <= 8 (Sucesso)');
			}
			else {
				story.currentScene = 'falhaRolar10';
				swal('Valores obtidos: ' + dado1 + ' + ' + dado2 + ' = ' + dados + ' > 8 (Falha)');
			}
		break;
		case ('pegarMicrochip'):
			microchip = true;
			story.currentScene = 'correrFundos';
		break;
		case ('testeMicrochip'):
			if (microchip)
				story.currentScene = 'terMicrochip';
			else
				story.currentScene = 'irFinal';
		break;
	}

	//Renderização do texto
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");

	//Programação dos botões
	button0.addEventListener('click', function (){
		cont++;
		getInputValue(0);
	})

	if (button1 != null)
	{
		button1.addEventListener('click', function (){
			cont++;
			if (cont == 1 && master)
			{
				master = false;
				window.location.href='index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null)
	{
		button2.addEventListener('click', function (){
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null)
	{
		button3.addEventListener('click', function (){
			cont++;
			getInputValue(3);
		})
	}
}

//Função de Seleção de Destino
function getInputValue (x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

//Função de Captura da Seleção
function getInputs(){
	var input = ""
	if (!story[story.currentScene].choices){
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++)
	{
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}
