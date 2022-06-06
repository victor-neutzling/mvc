class ValidationHelper{
    constructor(){
        throw new Error('ValidationHelper can\'t be instanciated');
    }
    static isNameValid(name){
        return /^[a-zA-Z\s]*$/.test(name);
    }
    static isNicknameValid(nickname){
        return /^[a-zA-Z0-9_.-]*$/.test(nickname);
    }
    static isEmailValid(email){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }
    static isPhoneValid(phone){
        return /[0-9 ]+/.test(phone);
    }
    //age is a whole other thing
    static isUrlValid(url){
    if(url.startsWith('https://')||url.startsWith('http://')){
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url);
    }else{
        return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(url);
        }
    }
    
}