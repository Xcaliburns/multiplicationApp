const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const justeEl = document.getElementById("juste");
const fauxEl = document.getElementById("faux");
const resetEl = document.getElementById("reset");

let juste = JSON.parse(localStorage.getItem("juste"));

if (!juste) {
    juste = 0;
}

justeEl.innerText = `juste: ${juste}`;

let faux = JSON.parse(localStorage.getItem("faux"));

if (!faux) {
    faux = 0;
}

fauxEl.innerText = `faux: ${faux}`;

questionEl.innerText = `Combien font ${num1} X ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        juste++;
        updateLocalStorage();
    } else {
        faux++;
        updateLocalStorage();
    }


});
//test bouton reset
resetEl.onclick = function(e) {
    juste = 0;
    justeEl.innerText = `juste: ${juste}`;
    faux = 0;
    fauxEl.innerText = `faux: ${faux}`;
    updateLocalStorage();
}


function updateLocalStorage() {
    localStorage.setItem("juste", JSON.stringify(juste));
    localStorage.setItem("faux", JSON.stringify(faux));
}