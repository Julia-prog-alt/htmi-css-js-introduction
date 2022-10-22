console.log("Launching script");//регистрируем переменные
const ancors = document.querySelectorAll(".thumbnails-anchor");//дщкумент - это стрфница к которой подключили скрипт.Метод квери селектор ищет по селектору, который указан в скобках.
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";
function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title'); 
}

for(let i = 0; i < anchors.length; i++){
    anchors[i]/addEventListener("click", function(){
        console.log("event - click on", anchors[i]);
        showDetails();
        setDetails(anchors[i]);
    })
}
function showDetails(){
    mainClass.classList.remove(HIDDEN);
}
function hideDetails(){
    mainClass.classList.add(HIDDEN);
}





