const dataAtual = new Date();
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();
console.log(diaAtual, mesAtual)

let dateTxt = document.getElementById('date');
let dateTxt2 = document.getElementById('date2');
dateTxt.innerHTML = `${diaAtual}/${mesAtual}/${anoAtual}`
dateTxt2.innerHTML = `${diaAtual}/${mesAtual}/${anoAtual}`


let username = 'Admin';
document.getElementById('nomeUsuario').innerHTML = username;

