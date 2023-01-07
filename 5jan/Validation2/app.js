let form = document.querySelector('form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Submitted");
    let fname = document.querySelector('#fname');
    console.log(fname.value.length);
    if(fname.value.length < 2){

        let fnmessage = document.querySelector("#fname_text")
    
        fnmessage.style.display = "block";

        fname.style.border = "1px solid red"
    
        fnmessage.innerText = "First Name is too short"
    
    }
    
    else{
    
    
    
        let fnmessage = document.querySelector("#fname_text")
    
        fnmessage.style.display = "none";
        fname.style.border = "1px solid #767676"

    
    }
    let sname = document.querySelector('#sname');
    console.log(sname.value.length);
    if(sname.value.length < 2){

        let snmessage = document.querySelector("#sname_text")
    
        snmessage.style.display = "block";

        sname.style.border = "1px solid red"
    
        snmessage.innerText = "Second Name is too short"
    
    }
    
    else{
    
    
    
        let snmessage = document.querySelector("#sname_text")
    
        snmessage.style.display = "none";
        sname.style.border = "1px solid #767676"

    
    }
})