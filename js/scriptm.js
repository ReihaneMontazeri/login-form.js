let userName = document.querySelector('.username')
let password = document.querySelector('.password')
let modal = document.querySelector('.modal')
let usernameWarning = document.querySelector('.usernameWarning')
let passwordWarning = document.querySelector('.passwordWarning')

function dataValidation(){
    let userNameValue = userName.value
    let passwordValue = password.value
    
    if (userNameValue.length < 12 || passwordValue.length < 8) {
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید.'
        modal.style.backgroundColor = 'red'
        modal.style.display = 'inline'
    }else{
        modal.style.backgroundColor = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'
    }
    setTimeout(() => {
        modal.style.display = 'none'
    }, 3000 );
}

// userName.addEventListener("keydown", function(){
//     console.log('typed')
//     let userNameValue = userName.value
//     console.log(userNameValue)

//     if(userNameValue.length < 12){
//         console.log('under 12')
//         usernameWarning.innerHTML = "Please enter 12 characters"
//         usernameWarning.style.display = 'block'
//     }else{
//         usernameWarning.innerHTML = "ready to go"
//     }
// });
// password.addEventListener("keydown", function(){
//     let passwordValue = password.value

//     if(passwordValue.length < 8){
//         console.log('under 8')
//         passwordWarning.innerHTML = "Please enter 8 characters"
//         passwordWarning.style.display = 'block'
//     }else{
//         passwordWarning.innerHTML = "ready to go"
//     }}
// );


userName.addEventListener("blur", function(){
    let userNameValue = userName.value

    if(userNameValue.length < 12){
        console.log('under 12')
        usernameWarning.innerHTML = "Please enter 12 characters"
        usernameWarning.style.display = 'block'
    }
})
password.addEventListener("blur", function(){
    let passwordValue = password.value

    if(passwordValue.length < 8){
        console.log('under 8')
        passwordWarning.innerHTML = "Please enter 8 characters"
        passwordWarning.style.display = 'block'
    }
})