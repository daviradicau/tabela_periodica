var elementBox = document.querySelector("#element-box")
var guess = document.querySelector("#guess-input")
var streak = document.querySelector("#streak")
var record = document.querySelector("#record")

var table = [
    ["Hidrogênio","H"], ["Hélio","He"], ["Lítio","Li"],
    ["Berílio","Be"], ["Boro","B"], ["Carbono","C"],
    ["Nitrogênio","N"], ["Oxigênio","O"], ["Flúor","F"],
    ["Neônio","Ne"], ["Sódio","Na"], ["Magnésio","Mg"],
    ["Alumínio","Al"], ["Silício","Si"], ["Fósforo","P"],
    ["Enxofre","S"], ["Cloro","Cl"], ["Argônio","Ar"],
    ["Potássio","K"], ["Cálcio","Ca"], ["Escândio","Sc"],
    ["Titânio","Ti"], ["Vanádio","V"], ["Cromo","Cr"],
    ["Manganês","Mn"], ["Ferro","Fe"], ["Cobalto","Co"],
    ["Níquel","Ni"], ["Cobre","Cu"], ["Zinco","Zn"],
    ["Gálio","Ga"], ["Germânio","Ge"], ["Arsênio","As"],
    ["Selênio","Se"], ["Bromo","Br"], ["Criptônio","Kr"],
    ["Rubídio","Rb"], ["Estrôncio","Sr"], ["Ítrio","Y"],
    ["Zircônio","Zr"], ["Nióbio","Nb"], ["Molibdênio","Mo"],
    ["Tecnécio","Tc"], ["Rutênio","Ru"], ["Ródio","Rh"],
    ["Paládio","Pd"], ["Prata","Ag"], ["Cádmio","Cd"],
    ["Índio","In"], ["Estanho","Sn"], ["Antimônio","Sb"],
    ["Telúrio","Te"], ["Iodo","I"], ["Xenônio","Xe"],
    ["Césio","Cs"], ["Bário","Ba"], ["Lantânio","La"],
    ["Cério","Ce"], ["Praseodímio","Pr"], ["Neodímio","Nd"],
    ["Promécio","Pm"], ["Samário","Sm"], ["Európio","Eu"],
    ["Gadolínio","Gd"], ["Térbio","Tb"], ["Disprósio","Dy"],
    ["Hólmio","Ho"], ["Érbio","Er"], ["Túlio","Tm"],
    ["Itérbio","Yb"], ["Lutécio","Lu"], ["Háfnio","Hf"],
    ["Tântalo","Ta"], ["Tungstênio","W"], ["Rênio","Re"],
    ["Ósmio","Os"], ["Irídio","Ir"], ["Platina","Pt"],
    ["Ouro","Au"], ["Mercúrio","Hg"], ["Tálio","Tl"],
    ["Chumbo","Pb"], ["Bismuto","Bi"], ["Polônio","Po"],
    ["Ástato","At"], ["Radônio","Rn"], ["Frâncio","Fr"],
    ["Rádio","Ra"], ["Actínio", "Ac"], ["Tório","Th"], ["Protactínio","Pa"],
    ["Urânio","U"], ["Neptúnio","Np"], ["Plutônio","Pu"],
    ["Amerício","Am"], ["Cúrio","Cm"], ["Berquélio","Bk"],
    ["Califórnio","Cf"], ["Einstênio","Es"], ["Férmio","Fm"],
    ["Mendelévio","Md"], ["Nobélio","Nb"], ["Laurêncio","Lr"],
    ["Rutherfórdio","Rf"], ["Dúbnio","Db"], ["Seabórgio","Sg"],
    ["Bóhrio","Bh"], ["Hássio","Hs"], ["Meitnério","Mt"],
    ["Darmstádio","Ds"], ["Roentgênio","Rg"], ["Copernício","Cn"],
    ["Nihônio","Nh"], ["Fleróvio","Fl"], ["Moscóvio","Mc"],
    ["Livermório","Lv"], ["Tenesso","Ts"], ["Oganessônio","Og"]
]

window.onload = () => {
    const streakRecord = localStorage.getItem('streakRecord')
    if(streakRecord) {
        record.innerHTML = streakRecord }
}

element = table[Math.floor(Math.random() * 118)]

elementBox.innerHTML = element[1]

function onGuess(e) {
    e.preventDefault()
    if(guess.value.toLocaleLowerCase() == element[0].toLocaleLowerCase()) {
        Number(streak.innerHTML++)
        element = table[Math.floor(Math.random() * 118)]
        elementBox.innerHTML = element[1]
        guess.value = ""
        document.getElementById("guess-button").style.backgroundColor = "#0A0"
        streak.style.fontSize = "4rem"
        setTimeout(() => {
            document.getElementById("guess-button").style.backgroundColor = "#0AC"
            streak.style.fontSize = "3rem"
        }, 500)

    } else if (guess.value != "") {
        guess.value = `${element[1]} = ${element[0]}`
        guess.setAttribute("readonly", true)
        document.getElementById("guess-button").style.backgroundColor = "#A00"
        document.getElementById("guess-button").style.borderColor = "#A00"
        guess.style.borderColor = "#A00"
        guess.style.color = "#A00"
        if (Number(streak.innerHTML) > Number(record.innerHTML)) { //new record
            record.innerHTML = streak.innerHTML
            record.classList.add('wiggle')
            localStorage.setItem('streakRecord', record.innerHTML)
            document.querySelector("h1").style.marginTop = "0rem"
            document.querySelector("h1").style.fontSize = "3rem"
        } else {
            streak.classList.add('wiggle')
        }
        setTimeout(() => {
            document.getElementById("guess-button").style.backgroundColor = "#0AC"
            document.getElementById("guess-button").style.borderColor = ""
            guess.style.borderColor = ""
            guess.style.color = ""
            guess.removeAttribute("readonly")
            guess.value = ""
            element = table[Math.floor(Math.random() * 118)]
            elementBox.innerHTML = element[1]
            streak.innerHTML = 0
            streak.classList.contains("wiggle") ? streak.classList.remove("wiggle") : record.classList.remove("wiggle")
            document.querySelector("h1").style.marginTop = "-3rem"
            document.querySelector("h1").style.fontSize = "2rem"
        }, 2000)
    }
}