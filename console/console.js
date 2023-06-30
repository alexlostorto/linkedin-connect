console.log("Script is running");

let descriptions = ''; // Example: 'software engineer computer'
let actions = ''; // Example: 'connect follow'

function hasText(matches, text) {
    text = text.toLowerCase();
    matches = matches.split(' ');
    for (let i = 0; i < matches.length; i++) {
        if (text.includes(matches[i].toLowerCase())) {
            return true;
        }
    }

    return false;
}

async function main() {
    console.log("Running");
    if (document.querySelector('.ember-view.display-flex') === null) {return}

    const people = document.querySelectorAll('.ember-view.display-flex');

    for (let i = 0; i < people.length; i++) {
        try {
            let action = people[i].querySelector('.discover-entity-type-card__bottom-container .artdeco-button__text');
            let description = people[i].querySelector('.discover-entity-type-card__link').children;
            description = description[description.length-1];

            if (action === null || description === null) {continue}

            action.style.border = '1px solid red';
            description.style.border = '1px solid red';

            if (hasText(descriptions, description.innerText) && hasText(actions, action.innerText)) {
                action.style.border = '3px solid red';
                action.click();
            }
        } catch(err) {}
    }
}

async function credits() {
    console.clear();
    console.log.apply(console, ["%c Thanks for using my Linkedin Connect Bot! ","color: #fff; background: #8000ff; padding:5px 0;"])
    console.log.apply(console, ["%c Designed and Developed by Alex lo Storto %c\ud83d\ude80 ","color: #fff; background: #8000ff; padding:5px 0;","color: #fff; background: #242424; padding:5px 0 5px 5px;"])
}

setInterval(main, 5000);
setInterval(credits, 1000);
