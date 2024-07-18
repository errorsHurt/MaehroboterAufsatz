const DEFAULT_DREHZAHL = 0;         // Standartdrehzahl festlegen
let aktuelleDrehzahl = DEFAULT_DREHZAHL;
let isAufsatzRunning = false;

function updateDrehzahl(neueDrehzahl) {
    aktuelleDrehzahl = neueDrehzahl;
    console.log(aktuelleDrehzahl)
}

function startDuengeraufsatz() {
    if (isAufsatzRunning) {
        console.log("Der Düngeraufsatz ist bereits eingeschaltet!");
    } else {
        console.log("Starte Düngeraufsatz mit Drehzahl: " + aktuelleDrehzahl);
        // Hier die Motoren starten
        isAufsatzRunning = true;
    }
}

function stopDuengeraufsatz() {
    if (isAufsatzRunning) {
        console.log("Stoppe Düngeraufsatz");
        // Hier die Motoren stoppen
        isAufsatzRunning = false;
    } else {
        console.log("Der Düngeraufsatz ist bereits ausgeschaltet!");
    }
}
