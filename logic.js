const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("mail");
const phoneNumber = document.getElementById("phone_number");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

//--------------------------------------------------------------------------------------------------------------------------------------------------
//first name errors
//--------------------------------------------------------------------------------------------------------------------------------------------------
"focusin input".split(" ").forEach(function(a){
    firstName.addEventListener(a, (e) =>{
        let element = e.target;
        let value = element.value;
        let parent = element.parentElement;
        let small = parent.querySelector("small");
        let errors = []
    
    
        if(!onlyLetters(value)){
            errors.push("ONLY LETTERS MUST BE USED!")
        }
        if(value.length < 2){
            errors.push("MIN LENGTH IS 2 CHARACTERS!")
        }
        if(value.length > 30){
            errors.push("MAX LENGTH IS 30 CHARACTERS!")
        }
    
    
        if(errors.length>0){
            showError(errors[0], small, element)
        }else{
            disableError(small, element)
        }
    
    });
});
firstName.addEventListener("focusout", (e) =>{
    let element = e.target;
    let parent = element.parentElement;
    let small = parent.querySelector("small");
    disableError(small, element);
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
//last name errors
//--------------------------------------------------------------------------------------------------------------------------------------------------
"focusin input".split(" ").forEach(function(a){
    lastName.addEventListener(a, (e) =>{
        let element = e.target;
        let value = element.value;
        let parent = element.parentElement;
        let small = parent.querySelector("small");
        let errors = []
    
    
        if(!onlyLetters(value)){
            errors.push("ONLY LETTERS MUST BE USED!")
        }
        if(value.length < 2){
            errors.push("MIN LENGTH IS 2 CHARACTERS!")
        }
        if(value.length > 30){
            errors.push("MAX LENGTH IS 30 CHARACTERS!")
        }
    
    
        if(errors.length>0){
            showError(errors[0], small, element)
        }else{
            disableError(small, element)
        }
    
    });
});
lastName.addEventListener("focusout", (e) =>{
    let element = e.target;
    let parent = element.parentElement;
    let small = parent.querySelector("small");
    disableError(small, element);
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
//mail name errors
//--------------------------------------------------------------------------------------------------------------------------------------------------
"focusin input".split(" ").forEach(function(a){
    email.addEventListener(a, (e) =>{
        let element = e.target;
        let value = element.value;
        let parent = element.parentElement;
        let small = parent.querySelector("small");
        let errors = []
    
        if(element.validity.patternMismatch){
            errors.push("USE PROPER EMAIL ADRESS!")
        }
        if(value.length < 1 ){
            errors.push("THIS FIELD IS REQUIRED!")
        }
        
        if(errors.length>0){
            showError(errors[0], small, element)
        }else{
            disableError(small, element)
        }
    
    });
});
email.addEventListener("focusout", (e) =>{
    let element = e.target;
    let parent = element.parentElement;
    let small = parent.querySelector("small");
    disableError(small, element);
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
//phone name errors
//--------------------------------------------------------------------------------------------------------------------------------------------------
"focusin input".split(" ").forEach(function(a){
    phoneNumber.addEventListener(a, (e) =>{
        let element = e.target;
        let value = element.value;
        let parent = element.parentElement;
        let small = parent.querySelector("small");
        let errors = []
    
        if(element.validity.patternMismatch){
            errors.push("USE MUST ONLY USE NUMBERS!")
        }
        if(value.length !== 9 ){
            errors.push("YOU MUST USE 9 DIGITS!")
        }
        
        if(errors.length>0){
            showError(errors[0], small, element)
        }else{
            disableError(small, element)
        }
    
    });
});
phoneNumber.addEventListener("focusout", (e) =>{
    let element = e.target;
    let parent = element.parentElement;
    let small = parent.querySelector("small");
    disableError(small, element);
});


//--------------------------------------------------------------------------------------------------------------------------------------------------
//password1 name errors
//--------------------------------------------------------------------------------------------------------------------------------------------------
"focusin input".split(" ").forEach(function(a){
    password1.addEventListener(a, (e) =>{
        let element = e.target;
        let value = element.value;
        let parent = element.parentElement;
        let small = parent.querySelector("small");
        let errors = []
    
        console.log(value);

        if(value.length <8 ){
            errors.push("MIN LENGTH IS 8 CHARACTERS!")
        }
        if(!containsLowercase(value)){
            errors.push("YOU MUST USE A LOWERCASE CHARACTER!")
        }
        if(!containsUppercase(value) ){
            errors.push("YOU MUST USE AN UPPERCASE CHARACTER!")
        }
        if(!containsNumber(value)){
            errors.push("YOU MUST USE A NUMBER")
        }
        
        if(errors.length>0){
            showError(errors[0], small, element)
        }else{
            disableError(small, element)
        }
    
    });
});
password1.addEventListener("focusout", (e) =>{
    let element = e.target;
    let parent = element.parentElement;
    let small = parent.querySelector("small");
    disableError(small, element);
});


//--------------------------------------------------------------------------------------------------------------------------------------------------
//password2 name errors
//--------------------------------------------------------------------------------------------------------------------------------------------------
"focusin input".split(" ").forEach(function(a){
    password2.addEventListener(a, (e) =>{
        let element = e.target;
        let value = element.value;
        let parent = element.parentElement;
        let small = parent.querySelector("small");
        let errors = []
    
        console.log(value);

        if(value !== password1.value ){
            errors.push("PASSWORDS DO NOT MATCH!")
        }
        
        if(errors.length>0){
            showError(errors[0], small, element)
        }else{
            disableError(small, element)
        }
    
    });
});
password2.addEventListener("focusout", (e) =>{
    let element = e.target;
    let parent = element.parentElement;
    let small = parent.querySelector("small");
    disableError(small, element);
});



function showError(message, small, element){
    element.setCustomValidity("error");
    small.innerText = message;
    small.classList.add("enabled");
}
function disableError(small,element){
    element.setCustomValidity("");
    small.classList.remove("enabled");
}

function onlyLetters(str){
    return /^[A-Za-z]*$/.test(str);
}

function containsUppercase(str){
    return /[A-Z]/.test(str);
}

function containsNumber(str){
    return /[0-9]/.test(str);
}

function containsLowercase(str){
    return /[a-z]/.test(str);
}