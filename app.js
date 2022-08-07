var input_textarea = document.querySelector("#input-text")
var output_textarea = document.querySelector("#output")
var translate_btn = document.querySelector("#btn-translate")
var reset_btn = document.querySelector("#btn-reset")
const url = "https://api.funtranslations.com/translate/minion.json"


translate_btn.addEventListener("click",function getText()
{
    var input = input_textarea.value
    fetch(url+"?text="+input)
    .then(response => response.json())
    .then(data => document.querySelector("#output").innerText = data.contents.translated)
})
reset_btn.addEventListener("click",(function clear(){

    input_textarea.value = ""
    output_textarea.innerText = ""
}))

