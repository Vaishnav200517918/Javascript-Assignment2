//Variables

let thumbnail = document.querySelectorAll(".thumbnail")
let featured = document.getElementById("featured")
let featuredCaption = document.getElementById("featured-caption")

//Functions
// func to change bg
function changebg() {

  document.body.style.backgroundImage = "url("+ featured.src + ")";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  
}

// func to clear bg
function clearbg() {
  document.body.style.backgroundImage = "none"
}

// func to select the img in full viewss
function gallery() {
  featured.src = this.src.replace("small", "large")
  featuredCaption.textContent = this.alt
  this.style.filter = "grayscale(0%)"

  for (let i = 0; i < thumbnail.length; i++) {
    if (thumbnail[i] != this ){
      thumbnail[i].style.filter = "grayscale(100%)"
    }
  }

}

//Adding The Event Listener
for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("click", gallery
    
  )
} 

