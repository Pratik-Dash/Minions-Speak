var input_textarea = document.querySelector("#input-text")
var output_textarea = document.querySelector("#output")
var translate_btn = document.querySelector("#btn-translate")
const url = "https://api.funtranslations.com/translate/minion.json"
var requestUrl = ""
var input = ""
function constructRequestURL(userInput){
    input = userInput
    requestUrl = url+"?text="+input
}
function errorHandler(error)
{
    document.querySelector("#output").innerText = "Number of request exceeded, please try after an hour"
}   
translate_btn.addEventListener("click",() =>
{
    var userInput = input_textarea.value
    if(userInput == ""){
        document.querySelector("#output").innerText = "Please enter some English text to translate"
    }else{
    constructRequestURL(userInput)
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => document.querySelector("#output").innerText = data.contents.translated)
    .catch(errorHandler);
    }
})


