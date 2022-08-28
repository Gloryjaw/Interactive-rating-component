const starslist = document.querySelector(".stars-list")
const stars = document.querySelectorAll(".stars")
const submit = document.querySelector(".submit-button")
const thankyoustate = document.querySelector(".thankyou-state")
const ratingstate = document.querySelector(".rating-state")
const variablerating = document.querySelector(".variable-thankyou-para")


let rating = 0;


starslist.addEventListener('click', function (e) {
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] == e.target) {
            stars[i].classList.add("clicked")
            rating = stars[i].innerText

        }
        else if (stars[i].classList.contains("clicked")) {
            stars[i].classList.remove("clicked")
        }

    }
})
for(let i = 0;i<stars.length;i++){
    stars[i].addEventListener("mouseover",function(e){
        if(e.target.classList.contains("clicked") == false){
            e.target.classList.add("mousehover")
        }
    })
    stars[i].addEventListener("mouseout",function(e){
        e.target.classList.remove('mousehover')
    })
}

submit.addEventListener('click', function () {
    if( rating == 0){return alert("Please enter a rating")}
    thankyoustate.style.display = "block"
    ratingstate.style.display = "none"
    variablerating.innerText = `You selected ${rating} out of 5`

})
