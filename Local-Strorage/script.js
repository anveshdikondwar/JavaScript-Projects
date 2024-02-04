const inputText=document.getElementById('mytextarea');



function savelocalStorage(){
    localStorage.setItem("key",inputText.value)
}


if(localStorage.getItem("key")){
    inputText.value=localStorage.getItem("key");

}
inputText.addEventListener('input',savelocalStorage)