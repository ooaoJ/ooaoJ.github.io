let home = document.getElementById('home');
let contagem = document.getElementById('contagem');
let nivel = document.getElementById('nivel');
let navButtons = document.querySelectorAll('.icones');

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
    }
}

function openNivel() {
    let nivelButton = document.getElementById('NivelNav');
    navButtons.forEach(button => button.classList.remove('activeIcon'));
    nivelButton.classList.add('activeIcon');

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

function openContagemNivel(id){
    const modalNiveis = document.getElementById("nivel");
    const modalFund1 = document.getElementById("fund1");
    const modalFund2 = document.getElementById("fund2");
    const modalMedio = document.getElementById('ensinomedioCard');
    const modalOutros = document.getElementById("outrosCard");
    
    modalFund1.style.display = 'none';
    modalFund2.style.display = 'none';
    modalMedio.style.display = 'none';
    modalOutros.style.display = 'none';


    if (id === 'fundamental'){  
        modalFund1.style.display = 'flex';
        modalNiveis.style.display = 'none';
        
    }else if (id === 'fundamental2'){
        modalFund2.style.display = 'flex';
        modalNiveis.style.display = 'none';
    }else if (id === 'ensinomedio'){
        modalMedio.style.display = 'flex';
        modalNiveis.style.display = 'none';
    }else{
        modalOutros.style.display = 'flex';
        modalNiveis.style.display = 'none';
    }
}
const modals = document.querySelectorAll(".cardTurma")

modals.forEach(modal => {
    modal.addEventListener('click', () => {
        alert(`clicou: ${modal.id}`)
    })
})