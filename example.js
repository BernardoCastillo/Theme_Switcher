console.log(document.styleSheets.length); //Outputs the number of stylesheets

// Example: Printing href of each stylesheet if it exists
for(let i = 0; i < document.styleSheets.length; i++){
    if(document.styleSheets[i].href){
        console.log(document.styleSheets[i].href)
    }
}