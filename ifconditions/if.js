const mytext = document.getElementById("mytext");
const submit = document.getElementById("submit");
const resultelement = document.getElementById("resultelement");

submit.onclick = function() {
    let age = mytext.value;
    age = Number(age);

    if (age < 18) {
        resultelement.textContent = "You cannot enter";
    } else if (age >= 18) {
        resultelement.textContent = "You can enter";
    }
}


