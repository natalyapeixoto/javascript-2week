const buttonOpen = document.querySelector(".login__button");
const buttonClose = document.querySelector(".login-modal__button-close");

buttonOpen.addEventListener("click", function(e){
	e.preventDefault();
	document.querySelector(".login-modal").style.display = "flex";
})

buttonClose.addEventListener("click", function(e){
	e.preventDefault();
	document.querySelector(".login-modal").style.display = "none";
})