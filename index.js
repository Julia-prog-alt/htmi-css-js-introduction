console.log("Launching script");//регистрируем переменные
const ancors = document.querySelectorAll(".thumbnails-anchor");//дщкумент - это стрфница к которой подключили скрипт.Метод квери селектор ищет по селектору, который указан в скобках.
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT = "is-point";
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title'); 
}

for(let i = 0; i < anchors.length; i++){
    anchors[i].addEventListener("click", function() {
        console.log("event - click on", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
function showDetails(){
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);/*classlist - показывает что перед вами список ......*/
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT);
    },1)
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
}
function soundClick() {
    var audio = new Audio();
    audio.src = 'click.mp3';
    audio.autoplay = true;
}





