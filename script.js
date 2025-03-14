// DOM Element -- button
// Event: click
document.getElementById("theme-toggle").addEventListener("click", function(){


    // DOM Element -- body
    // Toggle class
    document.body.classList.toggle('dark-theme');

    // DOM Element -- button
    // Toggle text
    if(this.innerText === 'Dark Theme'){
        this.innerText = 'Light Theme';
    }else{
        this.innerText = 'Dark Theme';
    }
})