
let baseURL = 'https://deckofcardsapi.com/api/deck';
  
// 1.
$.getJSON(`${baseURL}/new/draw/`).then(data => {
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

// 2.
// Make a request to the deck of cards API to request a single card from a newly shuffled deck.
// Once you have the card, make a request to the same API to get one more card from the same deck.
// Once you have both cards, console.log the values and suits of both cards.
$.getJSON(`${baseURL}/new/draw`)
    .then(data => {
        let card1 = data.cards[0];
        let { suit, value } = card1;
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
        deck_id = data.deck_id;
        return axios.get(`${baseURL}/${deck_id}/draw`);
    })
    .then(data => {
        let card2 = data.cards[0];
        let { suit, value } = card2;
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    })


// 3. 
$(function() {
    let deckId = null;
    let $btn = $('button');
    let $deckDiv = $('#deck_div');
  
    $.getJSON(`${baseURL}/new/shuffle/`)
        .then(data => {
            deckId = data.deck_id;
    });
  
    $btn.on('click', function() {
      $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        $deckDiv.append(
            $('<img>', {src: cardSrc, css: {
                    position: 'absolute',
                    transform: 'translate(100px, 100px)'
                }
            })
        );
      });
    });
})