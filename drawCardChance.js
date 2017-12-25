
function main() {
    let success = 0;
    let allTimes = 100000;
    for (let times = 0 ; times < allTimes ; times++) {
        let deck = [];

        deck = createDeck(deck);
        deck = shuffle(deck);

        for (let i = 0 ; i < 5 ; i++) {
            let size = deck.length;
            let eleAry = deck.splice(Math.floor(Math.random()*size), 1);
            if (eleAry[0] > 0) {
                success++;
                break;
            }
        }
    }

    console.log("success", success, "Times", allTimes, "P=", success/allTimes);
}

function createDeck(deck) {
    for (let i = 0 ; i < 3 ; i++)
        deck.push(1);

    for (let i = 0 ; i < 57 ; i++)
        deck.push(0);

    return deck;
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

main();
