import { getChildren, getCelebrities } from "./database.js";

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (child, celebrities) => {
    // for (const celebrity of celebrities) {
    //     if(celebrity.id === child.celebrityId)

    return celebrities.map(celebrity => celebrity.id === child.celebrityId)
    }
// }

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        if (kidsStar) {
            html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.Sport} star, by ${kid.wish}
            </li>
            `
        }
    }

    html += "</ul>"

    return html
}

