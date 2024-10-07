import { Celebrities } from "./CelebrityList.js"
import { Pairings } from "./Pairings.js"
import { Kids } from "./Kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

mainContainer.innerHTML = applicationHTML

let selectedChild = null
let selectedCelebrity = null

function displayPairing() {
    const pairings = document.querySelector(`#pairing-list`)
    const pairingHTML = `${selectedChild.name} will be making memories with ${selectedCelebrity.name},
        a professional ${selectedCelebrity.sport} player, by ${selectedChild.wish}.
    `
    pairings.innerHTML = `<p>${pairingHTML}</p>`
    selectedCelebrity = null
    selectedChild = null
}
mainContainer.addEventListener("click", (event) => {
    if (event.target.dataset.type === "celebrity") {
        const celebrityId = event.target.dataset.id 
        const celebritySport = event.target.dataset.sport // data attributes are used to access html elements
        selectedCelebrity = {id:celebrityId, name:event.target.innerHTML, sport:celebritySport}

        alert(`selected celebrity: ${selectedCelebrity.name}, sport: ${selectedCelebrity.sport}`)
        if (selectedChild && selectedCelebrity) {
            displayPairing()
        }
    }
})

mainContainer.addEventListener("click", (event) => {
    if (event.target.dataset.type === "child") {
        const childId = event.target.dataset.id 
        const childWish = event.target.dataset.wish 
        selectedChild = {id:childId, name:event.target.innerHTML, wish:childWish}

        alert(`selected child: ${selectedChild.name}, wish: ${selectedChild.wish}`)
        if (selectedChild && selectedCelebrity) {
            displayPairing()
        }
    }
})

