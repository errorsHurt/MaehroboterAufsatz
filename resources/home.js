var counter = 0

function fillLabel(){
    counter += 1;
    const label = document.getElementById("ausgabe")
    label.textContent = counter;
}
