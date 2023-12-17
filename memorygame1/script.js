/* initialize memory game when the DOM content is loaded */
document.addEventListener("DOMContentLoaded", function () {
    var imgList = [ /* list of image paths for game cards */
        "images/bbt.png",
        "images/burger.png",
        "images/sushi.png",
        "images/chocolate.png",
        "images/doughnut.png",
        "images/dumpling.png",
        "images/hotDog.png",
        "images/nigiri.png",
        "images/shrimp.png",
    ];

    var cardList = imgList.concat(imgList); /* duplicate the image list to create pairs */
    cardList.sort(() => Math.random() - 0.5); /* shuffle the card list randomly */

    var gameContainer = document.getElementById("memory-grid");
    var flippedCards = [];
    var lockBoard = false;

    /* function to create a card element */
    function createCard(index) {
        let card = document.createElement("div");
        card.classList.add("img", "hidden");
        card.style.backgroundImage = "url('images/tile.png')";
        card.setAttribute("data-id", index);
        card.addEventListener("click", cardClickHandler);
        gameContainer.appendChild(card);
    }

    /* function to handle card click events */
function cardClickHandler() {
    // check if the board is locked, the card is already matched, or the card is currently flipping
    if (lockBoard || this.classList.contains("matched") || this.classList.contains("flipping")) return;

    var selectedCard = this;
    var selectedCardIndex = selectedCard.getAttribute("data-id");

    // check if less than two cards are flipped
    if (flippedCards.length < 2) {
        // reveal the selected card
        selectedCard.style.backgroundImage = "url(" + cardList[selectedCardIndex] + ")";
        selectedCard.classList.remove("hidden");
        selectedCard.classList.add("flipping");
        flippedCards.push({ index: selectedCardIndex, element: selectedCard });

        // check if two cards are flipped
        if (flippedCards.length === 2) {
            lockBoard = true; // Lock the board to prevent additional card clicks

            // check if the two flipped cards match
            if (cardList[flippedCards[0].index] === cardList[flippedCards[1].index]) {
                // if match, mark cards with green and 'matched' class
                flippedCards.forEach((flippedCard) => {
                    flippedCard.element.style.backgroundColor = "green";
                    flippedCard.element.classList.add("matched");
                });
            } else {
                // else, mark the cards with 'flipping' and 'wrong' classes (will be given red indication)
                flippedCards.forEach((flippedCard) => {
                    flippedCard.element.classList.add("flipping", "wrong");
                });

                // flip cards back after a delay
                setTimeout(() => {
                    flippedCards.forEach((flippedCard) => {
                        flippedCard.element.style.backgroundImage = "url('images/tile.png')";
                        flippedCard.element.classList.remove("flipping", "wrong");
                    });
                    lockBoard = false; // unlock the board after card flipping animation
                }, 500); //delay
            }

            // reset flipped cards array and unlock the board after flipping animation
            setTimeout(() => {
                flippedCards.forEach((flippedCard) => {
                    flippedCard.element.classList.remove("flipping");
                });
                flippedCards = [];
                lockBoard = false;
                checkWin(); // check for a win after flipping the cards
            }, 500);
        }
    }
}

    /* function to reset the game */
    function resetGame() {
        gameContainer.innerHTML = "";
        cardList.sort(() => Math.random() - 0.5);
        flippedCards = [];
        lockBoard = false;

        for (let i = 0; i < cardList.length; i++) {
            createCard(i);
        }

        var overlayWin = document.getElementById("overlay_win");
        overlayWin.style.display = "none";
    }

    /* function to check if the player has won the game */
    function checkWin() {
        var allCards = document.querySelectorAll(".img");
        var allMatched = [...allCards].every((card) =>
            card.classList.contains("matched")
        );

        if (allMatched) {
            var overlayWin = document.getElementById("overlay_win");
            overlayWin.style.display = "block";
        }
    }

    /* event listener for the reset button in the overlay */
    document.getElementById("reset").addEventListener("click", function () {
        resetGame();
        var overlayWin = document.getElementById("overlay_win");
        overlayWin.style.display = "none";
    });

    /* event listener for the reset button outside the overlay */
    document.querySelector(".resetGame").addEventListener("click", resetGame);

    /* create initial set of cards */
    for (let i = 0; i < cardList.length; i++) {
        createCard(i);
    }
});
