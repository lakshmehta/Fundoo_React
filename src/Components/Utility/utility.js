const regex = {
     checkRegex(userInput,regex){
         console.log("regex and userinput",userInput,regex)
        return regex.test(userInput)
    },
    checkEmail(userInput,regexEmail){
      return regexEmail.test(userInput)
    }, 
    checkPass(userInput,regexPassword){
        return regexPassword.test(userInput)
      } 
}

module.exports= regex 
