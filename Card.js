const cards = document.querySelectorAll('.memoryCard');
cards.forEach(card => card.addEventListener('click', flipCard));

let flippedCard = false;
let first, second;

let lockBoard = false;

function flipCard(){
    // console.log('!!!');
    // console.log(this);
    if(lockBoard) return;
    if(this === first) return;

    this.classList.add('flip');

    if(!flippedCard){
        flippedCard = true;
        first = this;
         // console.log({flippedCard, first});
    }
    else{
        second = this;
        // console.log({first, second});
        // console.log(first.dataset.name);
        // console.log(second.dataset.name);

        // flippedCard = false;
        checkMatch();
    }
}

function checkMatch(){
    if(first.dataset.name === second.dataset.name){
        first.removeEventListener('click', flipCard);
        second.removeEventListener('click', flipCard);

        reset()
    }// console.log("done");
    else{
        lockBoard = true;

        setTimeout(()=>{
            first.classList.remove('flip');
            second.classList.remove('flip');

            reset()
        }, 1000);
    }
}

function reset(){
    flippedCard = false;
    lockBoard = false;
    first = null;
    second = null;
}

(function shuffle(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random()*2);
        card.style.order = randomPos;
    })
})();