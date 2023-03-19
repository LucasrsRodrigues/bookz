import { IBookProps } from "src/@types/IBookProps";

const listBooks: Array<IBookProps> = [
  {
    id: "0",
    type: "Ebook", 
    name: "A biblioteca da meia-noite", 
    rental: 29, 
    image: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg", 
    author: "Matt Haig", 
    company: "BERTRAND BRASIL", 
    ISBN: "6558380544",
    description: "Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido.Neste lugar entre a vida e a morte, e graças à ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália, reatar relacionamentos antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica... enfim, as opções são infinitas. Mas será que alguma dessas outras vidas é realmente melhor do que a que ela já tem?Em A Biblioteca da Meia-Noite, Nora Seed se vê exatamente na situação pela qual todos gostaríamos de poder passar: voltar no tempo e desfazer algo de que nos arrependemos. Diante dessa possibilidade, Nora faz um mergulho interior viajando pelos livros da Biblioteca da Meia-Noite até entender o que é verdadeiramente importante na vida e o que faz, de fato, com que ela valha a pena ser vivida.",
    stock: 912,
    sold: 500,
    rating: 4.5
  },
  {
    id: "1",
    type: "Ebook", 
    name: "Harry Potter e a Pedra Filosofal: 1", 
    rental: 32.50, 
    image: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg", 
    author: "J.K.Rowling", 
    company: "Rocco", 
    ISBN: "8532530788",
    description: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.",
    stock: 331,
    sold: 123,
    rating: 5
  },
  {
    id: "2",
    type: "Ebook", 
    name: "Sol e Tormenta",
    rental: 20.50,
    image: "https://m.media-amazon.com/images/I/81I1W5bArtL.jpg", 	
    author: "Leigh Bardugo",
    company : "Gutenberg",
    ISBN    : "8582351461",
    description: "Perseguida ao longo do Mar Real e aterrorizada pela memória dos que se foram, Alina Starkov tenta levar uma vida normal com Maly em uma terra desconhecida, enquanto mantém em segredo sua identidade como Conjuradora do Sol. Mas ela não pode ocultar seu passado e nem evitar seu destino por muito mais tempo. Ressurgido de dentro da Dobra das Sombras, o Darkling retorna com um aterrorizante e novo poder e um plano que irá testar todos os limites da natureza.Contando com a ajuda e com os ardis de um admirável e excêntrico corsário, Alina retorna ao país que abandonou, determinada a combater as forças que se reúnem contra Ravka. Mas enquanto seus poderes aumentam, ela se deixa envolver pelas artimanhas do Darkling e sua magia proibida, e se distancia cada vez mais de Maly. Ela será então obrigada a fazer a escolha mais difícil de sua vida: ter sua pátria, seu poder e o amor que ela sempre pensou ser seu porto-seguro ou arriscar perder tudo na tormenta que se aproxima.",
    stock: 22,
    sold: 98,
    rating: 3.5
  },
  {
    id: "3",
    type: "Ebook", 
    name: "Jonathan Strange e Mr. Norrell",
    rental: 25.00,
    image: "https://m.media-amazon.com/images/I/41Yzwvd85oS.jpg", 	
    author: "Adam Silvera",
    company: "Intrinseca",
    ISBN: "655560302X",
    description: "No início do século XIX, dois magos surgem para mudar a história da Inglaterra. Em 1806, com as Guerras Napoleônicas em curso, a maioria da população acreditava que a magia estava perdida há muito tempo – até que o astuto Mr. Norrell revela seus poderes, tornando-se célebre e poderoso. Porém, tudo muda de figura quando ele se vê diante de um rival inesperado: Jonathan Strange, seu jovem discípulo de confiança, que rejeita o mestre e tenta restaurar poderes lendários. Inadvertidamente, Strange libera forças incontroláveis que põem em risco a si próprio, aos que o cercam e a todo o país. Transitando entre a ficção e os fatos históricos, Susanna Clarke criou uma obra de fantasia totalmente original e irresistível.",
    stock: 274,
    sold: 66,
    rating: 2.5
  },
  {
    id: "4",
    type: "Ebook", 
    name: "É assim que acaba",
    rental: 3,
    image: "https://m.media-amazon.com/images/P/B078Z42ZFQ.01._SCLZZZZZZZ_SX500_.jpg", 	
    author: "Collen Hoover",
    company: "Galera",
    ISBN: "B078Z42ZFQ",
    description: "Da autora das séries Slammed e Hopeless. Um romance sobre as escolhas corretas nas situações mais difíceis. As coisas não foram sempre fáceis para Lily, mas isso nunca a impediu de conquistar a vida tão sonhada. Ela percorreu um longo caminho desde a infância, em uma cidadezinha no Maine: se formou em marketing, mudou para Boston e abriu a própria loja. Então, quando se sente atraída por um lindo neurocirurgião chamado Ryle Kincaid, tudo parece perfeito demais para ser verdade. Ryle é confiante, teimoso, talvez até um pouco arrogante e se sente atraído por Lily. Porém, sua grande aversão a relacionamentos é perturbadora. Além de estar sobrecarregada com as questões sobre seu novo relacionamento, Lily não consegue tirar Atlas Corrigan da cabeça — seu primeiro amor e a ligação com o passado que ela deixou para trás. Ele era seu protetor, alguém com quem tinha grande afinidade. Quando Atlas reaparece de repente, tudo que Lily construiu com Ryle fica em risco. Com um livro ousado e extremamente pessoal, Colleen Hoover conta uma história arrasadora, mas também inovadora, que não tem medo de discutir temas como abuso e violência doméstica. Uma narrativa inesquecível sobre um amor que custa caro demais.",
    stock: 123,
    sold: 33,
    rating: 3.2
  },
  {
    id: "5",
    type: "Ebook", 
    name: "Ex-Heróis",
    rental: 4,
    image: "https://m.media-amazon.com/images/I/711LDaJ6XCL.jpg", 	
    author: "Peter Clines",
    company: "Novo século",
    ISBN: "8542801059",
    description: "Em uma Los Angeles arruinada pelo apocalipse zumbi, um grupo de sobreviventes deve lutar pela vida. Para isso, contará com a ajuda preciosa de Stealth, Mighty Dragon e seus companheiros. Refugiados em um estúdio de cinema transformado em fortaleza, o Monte, deverão se proteger dos vorazes exércitos de ex-humanos e de outras ainda mais terríveis ameaças. Em Ex-heróis , dois ícones da cultura pop – zumbis e super-heróis – finalmente se encontram, numa narrativa de tirar o fôlego.",
    stock: 453,
    sold: 19,
    rating: 4.1
  },
  {
    id: "6",
    type: "Ebook", 
    name: "A bruxa do mar",
    rental: 11.90,
    image: "https://m.media-amazon.com/images/P/B0846VDBT3.01._SCLZZZZZZZ_SX500_.jpg", 	
    author: "Sarah Henning",
    company: "HarperCollins Brasil",
    ISBN: "4079707",
    description: "Desde a morte de sua melhor amiga, Anna, Evie precisa aguentar as fofocas e os rumores na vila em que mora. Nada conspira a seu favor: ela é filha de um pescador e o povo acredita que seja uma bruxa. E estão certos. Em um tempo de perseguição à magia, sua amizade com o príncipe Niklas é o que a mantém viva, gerando desconfiança em todo o reino. Obrigada a esconder seus poderes e assombrada pela verdade sobre o afogamento de Anna, Evie se sente isolada.Até que um dia, quando o príncipe sofre um acidente, uma garota impressionantemente parecida com Anna, o salva. O surgimento dessa menina chamada Annemette muda tudo. Com a nova amiga, um novo amor à vista e as coisas enfim voltando ao lugar, Evie sente que talvez possa ter uma chance com seu próprio feliz para sempre.No entanto, a magia não é gentil, e Annemette esconde seus segredos. Ela não pode ficar em Havnestad — ou sobre as duas pernas — sem a ajuda de Evie. Desesperada para salvá-la enquanto luta para que seus poderes não sejam descobertos, Evie precisa correr contra o tempo para garantir que tudo permaneça como está. E quando seus poderes atingem novos limites para salvar a humanidade da amiga — e o coração do príncipe que ela ama —, a menina descobre, tarde demais, o preço que terá que pagar.",
    stock: 332,
    sold: 12,
    rating: 4.2
  },
  {
    id: "7",
    type: "Pdf", 
    name: "Sussurros do país das maravilhas", 
    rental: 16, 
    image: "https://m.media-amazon.com/images/P/B01NCOJ14K.01._SCLZZZZZZZ_SX500_.jpg", 
    author: "A. G. Howard", 
    company: "Editora Novo Conceito", 
    ISBN: "3978238",
    description: "Alyssa Gardner entrou na toca do coelho para assumir o controle do seu destino. Ela sobreviveu à batalha pelo País das Maravilhas e pelo seu coração. No conto O Menino da Teia, Alison relembra o período em que viveu no País das Maravilhas e resgatou o homem que se tornaria seu marido e pai de sua filha, Alyssa. No A Mariposa no Espelho, conhecemos as lembranças de Morfeu, de quando ele mergulhou nas memórias de Jeb para descobrir os segredos dele e tentar ganhar, de uma vez por todas, o disputado coração de Alyssa. No Seis Coisas Impossíveis, Alyssa revive os momentos mais preciosos de sua vida após os aconntecimentos em Qualquer outro lugar, e o papel mágico que desempenhou para preservar a felicidade daqueles que ela ama. Em Sussurros do País das Maravilhas você encontrará três contos de lembranças inéditas e inesquecíveis. Junte-se novamente aos personagens da série O Lado mais Sombrio e embarque neste fantástico mundo.",
    stock: 223,
    sold: 12,
    rating: 3.2
  }
];


export async function getItem(id: string) {
  try {
    const indexItem = listBooks.find(item => item.id === id);

    return indexItem;
    // return indexItem !== -1 ? storedCart[indexItem] : {};
  } catch (error) {
    throw error;
  }

}

export async function getCarousel() {
  try {
    const carousel = new Array(listBooks[0], listBooks[1], listBooks[2]);

    return carousel;
  } catch (error) {
    throw error;
  }
}