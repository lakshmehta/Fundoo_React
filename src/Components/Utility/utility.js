const regex = {
     checkRegex(userInput,regex){
        if(regex.test(userInput.target.value)){
            return true;
        }
        else{
            return false;
        }
    }
   
}
module.exports= regex;