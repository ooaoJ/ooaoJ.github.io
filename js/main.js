const home = document.getElementById('home');
const contagem = document.getElementById('contagem');
const nivel = document.getElementById('nivel');
const navButtons = document.querySelectorAll('.icones');

let fundCount = 0;
let medioCount = 0;
let outrosCount = 0;

const fundamentalList = ['PrimeiroAno', 'SegundoAno', 'TerceiroAno', 'QuartoAno', 'QuintoAno', 'SextoAno', 'SetimoAno', 'OitavoAno', 'NonoAno'];

const medioList = ['PrimeiroMedio', 'SegundoMedio', 'TerceiroMedio'];

const outrosList = ['Arduino', 'Senai', 'CacaAsteroide', 'Personaliza', 'Autorizados', 'ParaGabaritar', 'Robotica', 'TRI', 'TopicoAvancado', 'PraticasInvestigativas'];



function openHome() {
    let homeButton = document.getElementById('HomeNav');
    navButtons.forEach(button => button.classList.remove('activeIcon'));
    homeButton.classList.add('activeIcon');

    if (home.style.display === 'flex') {
        console.log('Já aberto');
    } else {
        home.style.display = 'flex';
        contagem.style.display = 'none';
        nivel.style.display = 'none';
        document.getElementById("fund2").style.display = 'none';
        document.getElementById("fund1").style.display = 'none';
        document.getElementById("ensinomedioCard").style.display = 'none';
        document.getElementById("outrosCard").style.display = 'none';

        // Definindo os icones do dropdown

        const drop1 = document.getElementById('selectFund1');
        const drop2 = document.getElementById('selectFund2');
        const drop3 = document.getElementById('selectMedio');
        const drop4 = document.getElementById('selectOutros');

        drop1.classList.remove('activeIcon');
        drop2.classList.remove('activeIcon');
        drop3.classList.remove('activeIcon');
        drop4.classList.remove('activeIcon');
    }
}

function openContagem() {
    let contagemButton = document.getElementById('ContagemNav');
    navButtons.forEach(button => button.classList.remove('activeIcon'));
    contagemButton.classList.add('activeIcon');

    if (contagem.style.display === 'flex') {
        console.log('Já aberto');
    } else {
        contagem.style.display = 'flex';
        home.style.display = 'none';
        nivel.style.display = 'none';
        document.getElementById("fund2").style.display = 'none';
        document.getElementById("fund1").style.display = 'none';
        document.getElementById("ensinomedioCard").style.display = 'none';
        document.getElementById("outrosCard").style.display = 'none';

        // Definindo os icones do dropdown

        const drop1 = document.getElementById('selectFund1');
        const drop2 = document.getElementById('selectFund2');
        const drop3 = document.getElementById('selectMedio');
        const drop4 = document.getElementById('selectOutros');

        drop1.classList.remove('activeIcon');
        drop2.classList.remove('activeIcon');
        drop3.classList.remove('activeIcon');
        drop4.classList.remove('activeIcon');
    }
}

function openNivel() {
    let nivelButton = document.getElementById('NivelNav');
    navButtons.forEach(button => button.classList.remove('activeIcon'));
    nivelButton.classList.add('activeIcon');

    // Definindo os icones do dropdown

    const drop1 = document.getElementById('selectFund1');
    const drop2 = document.getElementById('selectFund2');
    const drop3 = document.getElementById('selectMedio');
    const drop4 = document.getElementById('selectOutros');

    drop1.classList.remove('activeIcon');
    drop2.classList.remove('activeIcon');
    drop3.classList.remove('activeIcon');
    drop4.classList.remove('activeIcon');

    if (nivel.style.display === 'flex') {
        console.log('Já aberto');
    } else {
        nivel.style.display = 'flex';
        contagem.style.display = 'none';
        home.style.display = 'none';
        document.getElementById("fund2").style.display = 'none';
        document.getElementById("fund1").style.display = 'none';
        document.getElementById("ensinomedioCard").style.display = 'none';
        document.getElementById("outrosCard").style.display = 'none';

    }
}

function openContagemNivel(id) {
    const modalNiveis = document.getElementById("nivel");
    const modalFund1 = document.getElementById("fund1");
    const modalFund2 = document.getElementById("fund2");
    const modalMedio = document.getElementById('ensinomedioCard');
    const modalOutros = document.getElementById("outrosCard");

    // Definindo os icones do dropdown

    const drop1 = document.getElementById('selectFund1');
    const drop2 = document.getElementById('selectFund2');
    const drop3 = document.getElementById('selectMedio');
    const drop4 = document.getElementById('selectOutros');


    modalFund1.style.display = 'none';
    modalFund2.style.display = 'none';
    modalMedio.style.display = 'none';
    modalOutros.style.display = 'none';

    drop1.classList.remove('activeIcon');
    drop2.classList.remove('activeIcon');
    drop3.classList.remove('activeIcon');
    drop4.classList.remove('activeIcon');

    if (id === 'fundamental') {
        modalFund1.style.display = 'flex';
        modalNiveis.style.display = 'none';
        drop1.classList.add('activeIcon');
    } else if (id === 'fundamental2') {
        modalFund2.style.display = 'flex';
        modalNiveis.style.display = 'none';
        drop2.classList.add('activeIcon');
    } else if (id === 'ensinomedio') {
        modalMedio.style.display = 'flex';
        modalNiveis.style.display = 'none';
        drop3.classList.add('activeIcon');
    } else {
        modalOutros.style.display = 'flex';
        modalNiveis.style.display = 'none';
        drop4.classList.add('activeIcon');
    }
}

const buttonsTurmas = document.querySelectorAll(".cardTurma");
const dialog = document.getElementById("cardContagem");
const nomeTurma = document.getElementById('nomeTurma');
const closeButtonDialog = document.getElementById("closeDialog");

function separarPalavras(id) {
    return id.replace(/([A-Z])/g, ' $1').trim();
}

buttonsTurmas.forEach(turma => {
    turma.addEventListener('click', () => {
        dialog.showModal();
        dialog.value = `${turma.id}`;
        nomeTurma.innerText = separarPalavras(turma.id);
    });
});

closeButtonDialog.addEventListener('click', () => {
    dialog.close();
    let quantidade = document.getElementById('numContagem');
    quantidade.value = '';
});

document.getElementById('sendContagem').addEventListener('click', () => {
    let quantidade = document.getElementById('numContagem').value;

    
    if (fundamentalList.includes(dialog.value)){
        alert(`A contagem foi enviada, foram registrados ${quantidade} alunos.`)
        fundCount += parseInt(quantidade);
    }else if (medioList.includes(dialog.value)){
        alert(`A contagem foi enviada, foram registrados ${quantidade} alunos.`)
        medioCount += parseInt(quantidade);
    }else{
        alert(`A contagem foi enviada, foram registrados ${quantidade} alunos.`)
        outrosCount += parseInt(quantidade);
    }

    updateContagem();
})

// atualizar a contagem a cada 30 segundos

function updateContagem(){
    const fund = document.getElementById('contadorFund');
    const medio = document.getElementById('contadorMedio');
    const outros = document.getElementById('contadorOutros');

    fund.textContent = fundCount
    medio.textContent = medioCount
    outros.textContent = outrosCount
}
