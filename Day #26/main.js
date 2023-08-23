const card = document.querySelectorAll(".card")
const cardActive = document.querySelectorAll(".active")
const buttons = document.querySelectorAll(".button")

let active = 0;

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        switch(active){
            case 0:
                card[0].classList.remove("active");
                card[0].classList.add("inactive");
                card[1].classList.add("active");
                card[1].classList.remove("inactive");
                active++;
                break;
            case 1:
                card[1].classList.remove("active");
                card[1].classList.add("inactive");
                card[2].classList.add("active");
                card[2].classList.remove("inactive");
                active++;
                break;
            case 1:
                card[2].classList.remove("active");
                card[2].classList.add("inactive");
                card[3].classList.add("active");
                card[3].classList.remove("inactive");
                active++;
                break;
        }
    })
})