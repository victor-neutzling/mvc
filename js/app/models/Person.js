class Person{
    constructor(name,nickname,email,phone,age,linkedin,github,certificate1,certificate2,certificate3,certificate4,certificate5,teamName,institution,graduation){
        this._name = name;
        this._nickname = nickname;
        this._email = email;
        this._phone = phone;
        this._age = age;
        this._linkedin = linkedin;
        this._github = github;
        this._certificate1 = certificate1;
        this._certificate2 = certificate2;
        this._certificate3 = certificate3;
        this._certificate4 = certificate4;
        this._certificate5 = certificate5;
        this._teamName = teamName;
        this._institution = institution;
        this._graduation = graduation;
    }
    get Person(){
        return [this._name,this._nickname,this._email,this._phone,this._age,this._linkedin,this._github,this._certificate1,this._certificate2,this._certificate3,this._certificate4,this._certificate5,this._teamName,this._institution,this._graduation]
    }
    
}