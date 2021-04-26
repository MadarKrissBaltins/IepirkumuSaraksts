const POP_UP = document.getElementById('popup');
let pirmais = [];

window.addEventListener('load', () => {
    pirmais = JSON.parse(localStorage.getItem("pirmais") || "[]");
    console.log(pirmais)

    render();
});

document.getElementById('pirmaPoga').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotPreci').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let otrais = {Nosaukums: precesNosaukums.value, Daudzums: precesDaudzums.value};

    precesNosaukums.value = "";
    precesDaudzums.value = "";

    pirmais.push(otrais);

    render();
})

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < pirmais.length; i++) {
        let otrais = `
        <div class="otrais">
            <h3>nosaukums: ${pirmais[i].Nosaukums}</h3>
            <h4>daudzums: ${pirmais[i].Daudzums}</h4>
        </div>`;

        biblioteka.innerHTML += otrais;
    }

    localStorage.setItem("pirmais", JSON.stringify(pirmais))
}