class View{ 
    constructor(element){
        this._element = element; //element should be an empty html div
    }
    template(model){
        throw new Error('the method "template()" was not implemented')
    }
    update(model){
        this._element.innerHTML = this.template(model);
    }

}