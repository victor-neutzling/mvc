class FormController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._previousDay = '';
        this._months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        this._inputDay = document.querySelector("#day");
        this._inputMonth = document.querySelector("#month");
        this._inputYear = document.querySelector("#year");
        
        this._inputCertificate = document.querySelectorAll(".certificates .main-tb input")
        this._certificateView = new CertificateView($('.certificates'));

        
    }

    addCertificateInput(){
        this._inputCertificate = document.querySelectorAll(".certificates .main-tb input")
        let $ = document.querySelector.bind(document);
        this._certificateView = new CertificateView($('.certificates'));
        if(this._inputCertificate.length < 5){
            this._certificateView.update();
        }else{
            //show more than 5 message
        }
    }
    removeCertificateInput(){
        this._inputCertificate = document.querySelectorAll(".certificates .main-tb input")
        let _inputCertificate2 = document.querySelector(".certificates .main-tb");
        let $ = document.querySelector.bind(document);
        this._certificateView = new CertificateView($('.certificates'));
        let remove = el => el.parentElement.removeChild(el);
        if(this._inputCertificate.length > 1){
            remove(_inputCertificate2);
        }else{
            //show less than 1 message
        }
    }
    addDate(){
       
    }
    
}