//If you want to copyText from Element
function copyTextFromElement(mytext) {
  //select the element
  let element = document.getElementById("mytext"); 
  
  //get the text content from the element
  let elementText = element.textContent; 
  
  //use the copyText function below
  copyText(elementText); 
}

//If you only want to put some Text in the Clipboard just use this function
// and pass the string to copied as the argument.
function copyText(text) {
  navigator.clipboard.writeText(text);
}

