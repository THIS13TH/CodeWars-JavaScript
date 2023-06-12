function defineSuit(card) {
    if(card.slice(1) === "♣") return "clubs";
    if(card.slice(1) === "♦") return "diamonds";
    if(card.slice(1) === "♥") return "hearts";
    if(card.slice(1) === "♠") return "spades";
}