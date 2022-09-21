console.log('Script is running');

/********************************************************************
*   Stap 6: Referentie maken naar HTML elementen
*********************************************************************/

const button = document.getElementById('button-field');
const output = document.getElementById('output-field');
const span = document.getElementById('span-field');

/********************************************************************
*   Stap 7: Functie maken om een random getal te genereren
*********************************************************************/

function rollDice() {
    return Math.ceil( Math.random() * 6 );
}

/********************************************************************
*   Stap 9: Functie voor het selecteren van de HTML obv random getal
*********************************************************************/

function createDice( param ) {
    switch ( param ) {
        case 1:
            output.innerHTML = `
                <div class="dice dice-1">
                    <span class="dot"></span>
                </div>
            `;
            break;
        case 2:
            output.innerHTML = `
                <div class="dice dice-2">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            `;
            break;
        case 3:
            output.innerHTML = `
                <div class="dice dice-3">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            `;
            break;
        case 4:
            output.innerHTML = `
                <div class="dice dice-4">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            `;
            break;
        case 5:
            output.innerHTML = `
                <div class="dice dice-5">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            `;
            break;
        case 6:
            output.innerHTML = `
                <div class="dice dice-6">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            `;
            break;
    }
}

/********************************************************************
*   Stap 8: Koppel click event aan de button die de functies aanroept
*********************************************************************/

button.addEventListener('click', () => {

    // Get random number
    const randomNum = rollDice();

    // Create a dice based on the random number
    createDice( randomNum );

    // Show results in text
    span.innerText = `You have rolled a ${ randomNum }`;

})