const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const iamegeItem = movieLists[i].querySelector("img").clientHeight;
  arrow.addEventListener("click", function () {
    clickCounter++;
  if (iamegeItem - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
  }else{
    movieLists[i].style.transform = "translateX(0)";
    clickCounter=0;
  }
});
});
/* dark mode */
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".cointainer,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball")

ball.addEventListener("click",function(){
   console.log(items);
})

