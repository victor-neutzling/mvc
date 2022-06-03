class CertificateView extends View{
    constructor(element){
        super(element)
    }
    template(model){
        return `<div class="main-tb">
        <h3>Certificates</h3>
        <div class="tb-with-heart">
            <input type="text" name="" id="" placeholder="https://linkedin.com/in/foo-bar-3a0560104/">
            <img src="./img/Trailing Icon.png" alt="">
            
        </div>
    </div>`
    }
    update(model){//this should be concatenated inside the div that contains the first certificate input box
        this._element.innerHTML += this.template(model);
    }
}