const question = document.querySelector('#questao');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Em "Exterminador do Futuro", quem era o soldado que volta no tempo para salvar Sarah Connor?',
        choice1: 'James Reese',
        choice2: 'Kyle Reese',
        choice3: 'John Prime',
        answer: 2,
    },
    {
        question:'Quais dos tributos foram sorteados na colheita do distrito 12 do septuagésimo quarto em "Jogos Vorazes"? ',
        choice1: 'Gale e Katniss Everdeen',
        choice2: 'Gale e Hazelle',
        choice3: 'Peeta Mellark e Primrose Everdeen',
        answer: 3,
    },
    {
        question: 'Em Vingadores - O ultimato, qual herói não participa do ataque a Thanos no início do filme?',
        choice1: 'Nebulosa',
        choice2: 'Homem-Aranha',
        choice3: 'Homem de Ferro',
        answer: 3,
    },
    {
        question: 'Qual o nome do pai do Pantera Negra?',
        choice1: 'N Jobu',
        choice2: 'T chaka',
        choice3: 'O Nara',
        answer: 2,
    },
    {
        question: 'Em que ano o filme "Django Livre" foi lançado?',
        choice1: '2012',
        choice2: '2013',
        choice3: '2011',
        answer: 1,
    },
    {
        question: 'Em "Matriz 1", qual era o outro nome do Neo?',
        choice1: 'Thomas Anderson',
        choice2: 'Liam Anderson',
        choice3: 'Henry Anderson',
        answer: 1,
    },
    {
        question: 'O que tem nos pós-créditos do filme "Venom"?',
        choice1: 'Os homens de Preto lutando contra o Venom',
        choice2: 'Peter Parker vendo a notícia do Simbionte',
        choice3: 'A estreia de Carnage e uma cena de Homem-Aranha no Aranhaverso',
        answer: 3,
    },
    {
        question: 'No filme "Interstellar", qual o nome de cada um dos integrantes que viajam no espaço em busca de um novo lar para a humanidade?',
        choice1: 'Joseph Cooper, Amelia Brand, Dr.Romilly e Doyle',
        choice2: 'Joseph Cooper, Amelia Brand, Rommilly e Doyle',
        choice3: 'Joseph Cooper, Amelia Brand, Dr.Mann e Murphy Cooper',
        answer: 1,
    },
    {
        question: 'Quais as principais pessoas com as quais o Driss de “Intocáveis” tinha problemas?',
        choice1: 'Mãe e Esposa',
        choice2: 'Irmão e Mãe',
        choice3: 'Irmão e Vizinho',
        answer: 2,
    },
    {
        question: 'Qual a classificação indicativa do filme “Rafiki”?',
        choice1: '14 anos',
        choice2: '16 anos',
        choice3: '18 anos',
        answer: 1,
    },
    {
        question: 'Onde se passa o filme “Moonlight: Sob a Luz do Luar”?',
        choice1: 'Cutler Bay, Miami',
        choice2: 'Florida City, Miami',
        choice3: 'Liberty City, Miami',
        answer: 3,
    },
    {
        question: 'Você se lembra do nome do arquiteto que desenhou a mansão dos Park no filme "Parasita"? Ele foi citado em algumas cenas pela governanta da casa, Moon-Gwang.',
        choice1: 'Joseon',
        choice2: 'Namjoo',
        choice3: 'Namgoong',
        answer: 3,
    },
    {
        question: 'Em que ano foi lançado o filme “Superação- o milagre da fé”?',
        choice1: '2018',
        choice2: '2019',
        choice3: '2020',
        answer: 2,
    },
    {
        question: 'Tendo o drama como gênero principal, quais os outros 2 gêneros muito presentes no filme “Ilha do medo”?',
        choice1: 'Comédia e Mistério',
        choice2: 'Terror e Mistério',
        choice3: 'Romance e Terror',
        answer: 2,
    },
    {
        question: 'No filme "O milagre da cela 7", por qual razão o velho da prisão frequentemente olhava a marca da parede?',
        choice1: 'Não é falado no filme',
        choice2: 'Pois toda vez que ele olhava, lhe trazia boas lembranças',
        choice3: 'Por ter matado sua própria filha e a ter enterrado naquele lugar, com um lenço vermelho pendurado',
        answer: 3,
    },
    {
        question: 'No filme "Bohemian Rhapsody", em qual data ocorre o Live Aid?',
        choice1: '13/07/1978',
        choice2: '12/07/1983',
        choice3: '13/07/1985',
        answer: 3,
    },
    {
        question: 'Em "Como eu era antes de você", por quanto tempo Lu e Patrick namoraram?',
        choice1: '3 anos',
        choice2: '5 anos',
        choice3: '7 anos',
        answer: 3,
    },
    {
        question: 'Quais são as idades de Hazel e Augustus respectivamente no filme "A culpa é das estrelas"?',
        choice1: '17 e 18 anos',
        choice2: '16 e 17 anos',
        choice3: '18 e 16 anos',
        answer: 2,
    },
    {
        question: 'Em "A 5 passos de você", o que Will disse para Stella na hora que eles estavam na piscina?',
        choice1: '“Deus, você é linda. Queria poder te tocar”.',
        choice2: '“Nossa, você é bela. Queria poder te tocar”.',
        choice3: '“Céus, você é perfeita. Queria poder te tocar”.',
        answer: 1,
    },
    {
        question: 'Quantos metros de altura tinha o Titanic?',
        choice1: '163 metros',
        choice2: '169 metros',
        choice3: '170 metros',
        answer: 2,
    },
    {
        question: 'Qual o nome do marido de Mia, do filme “La la land”?',
        choice1: 'Keith',
        choice2: 'Sebastian',
        choice3: 'David',
        answer: 3,
    },
    {
        question: 'O filme “A garota invisível”, está disponível em qual streaming e em qual classificação indicativa?',
        choice1: 'Netflix, 10 anos',
        choice2: 'Disney Plus, 12 anos',
        choice3: 'GloboPlay, 14 anos',
        answer: 1,
    },
    {
        question: 'Qual o nome do livro que Lara Jean estava lendo no começo do filme "Para todos os garotos que já amei"?',
        choice1: 'O beijo perdido',
        choice2: 'O encontro proibido',
        choice3: 'O beijo proibido',
        answer: 3,
    },
    {
        question: 'Em "A barraca do beijo" onde Lee e Elle amavam ir dançar?',
        choice1: 'Pier de Los Angeles',
        choice2: 'Pier de Santa Mônica',
        choice3: 'Pier de San Diego',
        answer: 2,
    },
    {
        question: 'Em "Invocação do mal 1", em que ano Ed e Lorraine Warren investigaram o Caso Annabelle?',
        choice1: '1966',
        choice2: '1967',
        choice3: '1968',
        answer: 3,
    },
    {
        question: 'Qual foi a data de lançamento do filme “Nós” no Brasil?',
        choice1: '21 de março de 2019',
        choice2: '20 de maro de 2019',
        choice3: '19 de março de 2019',
        answer: 1,
    },
    {
        question: 'No filme “Corra”, qual era a profissão do protagonista?',
        choice1: 'Design',
        choice2: 'Fotógrafo',
        choice3: 'Jornalista',
        answer: 2,
    },
    {
        question: 'Depois de ser adotada por Anna e Richard Morgan, para qual cidade Samara foi no filme "O Chamado"?',
        choice1: 'Chicago',
        choice2: 'Filadélfia',
        choice3: 'Ilha Moesko',
        answer: 3,
    },
    {
        question: 'Em "It a coisa", quem não se lembra de quando nosso querido Palhaço aterrorizante arranca o braço de Georgie? Você consegue se lembrar também qual dos braços Pennywise arrancou?',
        choice1: 'Braço direito',
        choice2: 'Braço esquerdo',
        choice3: 'Ele não arrancou nenhum braço',
        answer: 1,
    },
    {
        question: 'No filme "A Freira" quais são os nomes das pessoas que foram investigar o caso da freira que tirou a própria vida?',
        choice1: 'Irmã Irene, Ana, Frenchie',
        choice2: 'Frenchie, James, Irmã Irene',
        choice3: 'Nenhuma das alternativas',
        answer: 3,
    },
    {
        question: '"O Silêncio dos inocentes",qual é o título do filme em inglês?',
        choice1: 'The Silence of Innocents',
        choice2: 'The Silence of the Lambs',
        choice3: 'The Call of the Inocents',
        answer: 1,
    },
    {
        question: 'Em "Silent Hill" de que doença a criança Sharon sofre?',
        choice1: 'Síndrome de Angelman',
        choice2: 'Síndrome de Asperger',
        choice3: 'Síndrome de Klinefelter',
        answer: 2,
    },
    {
        question: 'Complete a frase do filme "As Branquelas": "Eu vendo sorvete…:',
        choice1: '“morango, creme e napolitano, se você quiser.”',
        choice2: '“creme, chocolate e misto, se você quiser.”',
        choice3: '“morango, chocolate e menta, se você quiser.”',
        answer: 1,
    },
    {
        question: 'Antes de se tornar um filme, ”Minha mãe é uma peça” era?',
        choice1: 'Uma série',
        choice2: 'Um programa de TV',
        choice3: 'Uma peça de teatro',
        answer: 3,
    },
    {
        question: 'No filme “Gente Grande”, qual dos 5 amigos é o um pai desempregado, que é casado com a Deanne?',
        choice1: 'Lenny Feder',
        choice2: 'Kurt McKenzie',
        choice3: 'Marcus Higgins',
        answer: 2,
    },
    {
        question: 'Em "Todo mundo em pânico", qual o nome do livro que Gale Weathers escreveu sobre os assassinatos de Ghostface?',
        choice1: 'The Woodsboro Murders',
        choice2: 'The Ghostface Cases',
        choice3: 'The Secret Story of Maureen Prescott',
        answer: 1,
    },
    {
        question: 'Quais são os nomes dos atores que interpretam os cientistas protagonistas masculino e feminino respectivamente do filme “Não olhe para cima”?',
        choice1: 'Leonardo DiCaprio e Cate Blanchett',
        choice2: 'Jennifer Lawrence e Leonardo DiCaprio',
        choice3: 'Leonardo DiCaprio e Jennifer Lawrence',
        answer: 3,
    },
    {
        question: 'Qual o nome do ator protagonista do filme “ Vovó…zona”?',
        choice1: 'Eddie Murphy',
        choice2: 'Martin Lawrence',
        choice3: 'Terry Crews',
        answer: 2,
    },
    {
        question: 'Segundo o Shrek, ogros são como...',
        choice1: 'Pimenta',
        choice2: 'Alho',
        choice3: 'Cebola',
        answer: 3,
    },
    {
        question: 'O que acontece durante o final/início do Episódio 3 de WandaVision?',
        choice1: 'Mostra o Visão sendo morto pela Wanda;',
        choice2: 'A série entra na era das cores das TVs',
        choice3: 'Nenhuma das alternativas.',
        answer: 2,
    },
    {
        question: 'Na série "Cobra Kai" qual a cor do primeiro carro que o Johnny Lawrence tem na série?',
        choice1: 'Dodge: Caravan “1993”, cor amarela.',
        choice2: 'Dodge: Challenger, R/T 2009, na cor vermelha.',
        choice3: 'Pontiac Firebird 1991, na cor vermelha.',
        answer: 3,
    },
    {
        question: 'Em qual data foi transmitido o primeiro episódio da série “The Boys”?',
        choice1: '26 de julho de 2019',
        choice2: '26 de junho de 2019',
        choice3: '27 de julho de 2019',
        answer: 1,
    },
    {
        question: 'The Witcher - Quantas linhas temporais tem na primeira temporada?',
        choice1: '2 linhas',
        choice2: '3 linhas',
        choice3: '4 linhas',
        answer: 2,
    },
    {
        question: 'Na série "The Umbrella Academy" em que ano iria acontecer o apocalipse?',
        choice1: '2017',
        choice2: '2018',
        choice3: '2019',
        answer: 3,
    },
    {
        question: '(Essa é um crossover de série com filme) O que o Demolidor fala em “Spider Man-No Way Home” quando ele "quebra" o sentido-aranha?',
        choice1: 'Eu sou um bom advogado!',
        choice2: 'Isso aqui não foi nada.',
        choice3: 'Silêncio!',
        answer: 1,
    },
    {
        question: 'Em "Vikings" qual era o nome do monge que Ragnar se tornou amigo em sua primeira viagem para Inglaterra?',
        choice1: 'Atholsthan',
        choice2: 'Athelsthan',
        choice3: 'Athilsthan',
        answer: 2,
    },
    {
        question: 'Na série "Loki" o que significa AVT?',
        choice1: 'Agência de Viajantes do Tempo',
        choice2: 'Autoridade de Variantes do Tempo',
        choice3: 'Agência de Variantes de Tempo',
        answer: 2,
    },
    {
        question: 'Quantos dias depois do 11 de setembro a Rue de "Euphoria" nasceu?',
        choice1: '3 dias',
        choice2: '4 dias',
        choice3: '5 dias',
        answer: 1,
    },
    {
        question: 'Em qual episódio da primeira temporada de "Sex Education" o Otis beija Ola pela primeira vez?',
        choice1: '6° episódio',
        choice2: '7° episódio',
        choice3: '8° episódio',
        answer: 3,
    },
    {
        question: '"Gossip Girl" qual era o pequeno almoço famoso na casa dos Humphrey?',
        choice1: 'Macarrão',
        choice2: 'Waffles',
        choice3: 'Ovos com Bacon',
        answer: 2,
    },
    {
        question: 'Na série "Pretty Little Liars", qual nome Alison usava na identidade falsa?',
        choice1: 'Vivian Bloom',
        choice2: 'Vivian Darkbloom',
        choice3: 'Vivian Dark',
        answer: 2,
    },
    {
        question: 'Na terceira temporada de "On my Block" o Spooky (Assombrado) demonstra ter medo de algo, do que é?',
        choice1: 'Fantasmas',
        choice2: 'O fundador de sua gangue "Os Santos", Lil Ricky',
        choice3: 'Abuelita',
        answer: 1,
    },
    {
        question: 'Quais são os nomes do pai e da mãe da Kiara, respectivamente em "Outer Banks"?',
        choice1: 'Alex e Grace Carrera',
        choice2: 'Mike e Anna Carrera',
        choice3: 'Heyward e Cheryl Carrera',
        answer: 2,
    },
    {
        question: 'O nome do amante comunista de Ada em "Peaky Blinders" é...',
        choice1: 'Freddie Thorne',
        choice2: 'Michael Gray',
        choice3: 'Luca Changretta',
        answer: 1,
    },
    {
        question: 'Em "This is Us", qual era o nome do filho de Rebeca e Jack que morreu durante o parto?',
        choice1: 'Kevin',
        choice2: 'Kyle',
        choice3: 'John',
        answer: 2,
    },
    {
        question: 'Em "Jane the Virgin", qual é o nome completo do Mateo?',
        choice1: 'Mateo Gloriano Rogelio Solano Villanueva',
        choice2: 'Mateo Gloriano De La Vega Solano Villanueva',
        choice3: 'Mateo Gloriano Rogelio De La Vega Solano Villanueva',
        answer: 1,
    },
    {
        question: 'Em "Gilmore Girls", Rory era uma garota muito estudiosa, ela sempre teve o sonho de ir para uma universidade. Essa universidade era...',
        choice1: 'Harvard',
        choice2: 'Stanford',
        choice3: 'Yale',
        answer: 1,
    },
    {
        question: 'The End of the F***ing World - Qual era a idade de James? (Antes do último episódio)',
        choice1: '16 anos',
        choice2: '17 anos',
        choice3: '18 anos',
        answer: 2,
    },
    {
        question: 'Em "Sex in the city" na abertura da série, em que ordem aparecem os nomes das atrizes principais?',
        choice1: 'Sarah Jessica Parker, Kim Cattrall, Kristin Davis e Cynthia Nixon',
        choice2: 'Sarah Jessica Parker, Cynthia Nixon, Kim Cattrall e Kristin Davis',
        choice3: 'Kim Cattrall, Sarah Jessica Parker, Kristin Davis e Cynthia Nixo',
        answer: 1,
    },
    {
        question: 'Quais desses atores/atrizes nunca fizeram parte do elenco da série "Modern Love"?',
        choice1: 'Ed Sheeran',
        choice2: 'Julia Garner',
        choice3: 'Daniel Jones',
        answer: 3,
    },
    {
        question: 'Em que episódio da primeira temporada de "Emily em Paris", Thomas aparece pela primeira vez?',
        choice1: 'Ep 6',
        choice2: 'Ep 7',
        choice3: 'Ep 8',
        answer: 1,
    },
    {
        question: 'Em "Dash & Lily", com quantos episódios a série conta e em que data a série foi lançada respectivamente?',
        choice1: '10 episódios, 12 de novembro de 2020',
        choice2: '9 episódios, 11 de novembro de 2020',
        choice3: '8 episódios, 10 de novembro de 2020',
        answer: 3,
    },
    {
        question: ' Qual o nome do grupo de amigas na série "Ginny e Georgia"?',
        choice1: 'MUNG',
        choice2: 'MANG',
        choice3: 'MENG',
        answer: 2,
    },

    {
        question: 'Quantos outros "paranormais" Sam encontra na segunda temporada, quando Azazel junta todos eles numa cidade fantasma em "Sobrenatural"?',
        choice1: '2',
        choice2: '3',
        choice3: '4',
        answer: 3,
    },

    {
        question: 'The Walking Dead - Quando Rick vai procurar Hershel, eles encontram um grupo de sobreviventes, o grupo de Randall, porém os matam. Em que ordem eles são mortos, respectivamente?',
        choice1: 'Dave, Randall, Tony e Sean',
        choice2: 'Dave, Tony, Sean e Randall',
        choice3: 'Dave, Randall, Nate e Tony',
        answer: 2,
    },

    {
        question: 'Na segunda temporada de "American Horror Story", por que o casal aparece em Briarcliff?',
        choice1: 'Fazia parte da lua de mel deles',
        choice2: 'Estavam perdidos e acharam a Instituição',
        choice3: 'Porque queriam visitar um parente',
        answer: 1,
    },

    {
        question: 'Na série "You", qual o nome da mãe de Pacco?',
        choice1: 'Celine',
        choice2: 'Claudia',
        choice3: 'Klaudia',
        answer: 2,
    },

    {
        question: '“Marianne” é uma série de terror de qual país?',
        choice1: 'França',
        choice2: 'Canadá',
        choice3: 'Bélgica',
        answer: 1,
    },

    {
        question: 'Em "Maldição da Residência Hill", quem visitou o porão da casa pela primeira vez?',
        choice1: 'Theodora',
        choice2: 'Steven',
        choice3: 'Luke',
        answer: 3,
    },

    {
        question: 'Em "O Mundo Sombrio de Sabrina", quando aconteceu o acidente de avião dos pais de Sabrina, para onde eles estavam indo?',
        choice1: 'Paris',
        choice2: 'Itàlia',
        choice3: 'Madri',
        answer: 2,
    },

    {
        question: '"Strangers From Hell" é uma série...',
        choice1: 'Norte-Coreana',
        choice2: 'Chinesa',
        choice3: 'Sul-Coreana',
        answer: 3,
    },

    {
        question: 'Qual roupa Rachel estava usando quando entrou no Central Park, no primeiro episódio da série "Friends"?',
        choice1: 'Seu vestido da sorte',
        choice2: 'Vestido de noiva',
        choice3: 'Jeans normal',
        answer: 2,
    },

    {
        question: 'Na série "Big Mouth", qual dessas duplas foi convidada para ir a festa do pijama de Jay?',
        choice1: 'Andrew e Nick',
        choice2: 'Eliot e Duke',
        choice3: 'Jessy e Pam',
        answer: 1,
    },

    {
        question: 'Rick and Morty - Em qual episódio Rick se transforma em um picles?',
        choice1: 'Temp 3 ep 2',
        choice2: 'Temp 3 ep 3',
        choice3: 'Temp 3 ep 4',
        answer: 2,
    },

    {
        question: 'Quantos episódios tem a série “Ted Lasso”?',
        choice1: '20 episódios',
        choice2: '22 episódios',
        choice3: '24 episódios',
        answer: 2,
    },

    {
        question: 'Em "Eu...nunca", o quadro de prós e contras que a Devi e suas amigas montam no 1°episódio da segunda temporada, o Paxton:',
        choice1: 'Aparece com um contra a mais.',
        choice2: 'Aparece com uma vantagem a mais',
        choice3: 'Aparece empatado com o Ben',
        answer: 2,
    },

    {
        question: 'Em "Julie and the Phantoms", qual é o título do artigo que a Julie encontra ao pesquisar Sunset Curve no Google?',
        choice1: 'Sunset Curve: A Hollywood Tragedy/ A tragédia de Hollywood',
        choice2: 'Sunset Curve: The unexpected death/ A morte inesperada',
        choice3: 'Sunset Curve: Tragedy over stray dogs/ A tragédia por conta de cachorros de rua.',
        answer: 1,
    },

    {
        question: 'Como é o nome do cachorro do Capitão Holt da série "Brooklyn nine-nine"?',
        choice1: 'Peralta',
        choice2: 'Babaloo',
        choice3: 'Cheddar',
        answer: 3,
    },

    {
        question: 'Na série "The Office" qual é o nome do namorado do Val?',
        choice1: 'Jay',
        choice2: 'Brandon',
        choice3: 'Darryl',
        answer: 2,
    },

    {
        question: 'Só pra saber, qual nota você daria para esse quiz?',
        choice1: '10 e olhe lá!',
        choice2: '100 tá bom :)',
        choice3: '1000 pq o quiz tá incrível ✨',
        answer: 3,
    }


    
]

const SCORE_POINTS = 50
const MAX_QUESTIONS = 80

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('../html/end.html')
    }

    questionCounter++
    progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()