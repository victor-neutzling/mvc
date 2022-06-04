class FormController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._previousDay = '';
        this._months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        
        this._inputCertificate = document.querySelectorAll(".certificates .main-tb input")
        this._certificateView = new CertificateView($('.certificates'));

        this._firstPageView = new FirstPageView($('#root'));
        this._secondPageView = new SecondPageView($('#root'));
        this._thirdPageView = new ThirdPageView($('#root'));

        this._monthSelector = document.querySelector('#month');
        DateHelper.addDate();
        this._pageIndex = 1;
        this._emptyFieldMessage = new Message('The fields marked as * are mandatory.');
        this._wrongInfoMessage = new Message('Check that the fields are filled in correctly.')

        let headerIcon = document.querySelector("#item1")
        headerIcon.style.boxShadow = 'inset 0px -2px 0px #074ee8';
        headerIcon.style.color = 'Blue'
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

    gotoFirstPage(){
        this._firstPageView.update();
        DateHelper.addDate();
        this._pageIndex = 1;
        let headerIcon = document.querySelector("#item1")
        headerIcon.style.boxShadow = 'inset 0px -2px 0px #074ee8';
        headerIcon.style.color = '#074ee8'
        let headerIcon2 = document.querySelector("#item2")
        headerIcon2.style.boxShadow = 'inset 0px -2px 0px #767676';
        headerIcon2.style.color = '#767676'
        let headerIcon3 = document.querySelector("#item3")
        headerIcon3.style.boxShadow = 'inset 0px -2px 0px ##767676';
        headerIcon3.style.color = '#767676'
    }
    gotoSecondPage(){
        if(this._pageIndex == 1){
            let validationFailed = false;
            let areFieldsEmpty = false;
            if(!ValidationHelper.isNameValid(document.querySelector('#tb-name').value) ){
                document.querySelector('#tb-name').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-name').style.borderColor = '';
                validationFailed = true;
            }
            if(document.querySelector('#tb-name').value === ''){
                document.querySelector('#tb-name').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-name').style.borderColor = '';
                areFieldsEmpty = true;
            }

            if(!ValidationHelper.isNicknameValid(document.querySelector('#tb-nickname').value)){
                document.querySelector('#tb-nickname').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-nickname').style.borderColor = '';
                validationFailed = true;
            }
            if(!ValidationHelper.isEmailValid(document.querySelector('#tb-email').value) ){
                document.querySelector('#tb-email').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-email').style.borderColor = '';
                validationFailed = true;
            }
            if(document.querySelector('#tb-email').value === ''){
                document.querySelector('#tb-email').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-email').style.borderColor = '';
                areFieldsEmpty = true;
            }
            if(!ValidationHelper.isPhoneValid(document.querySelector('#tb-phone').value)){
                document.querySelector('#tb-phone').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-phone').style.OutlineColor = 'blue';
                validationFailed = true;
            }
            if(validationFailed){
                
                let m1 = new MessageView(document.querySelector('#message1'))
                m1.update(this._wrongInfoMessage)
                if(areFieldsEmpty){
                    let m2 = new MessageView(document.querySelector('#message2'))
                    
                    m2.update(this._emptyFieldMessage)
                }
                return;
            }
            if(areFieldsEmpty){
                let m2 = new MessageView(document.querySelector('#message2'))
                
                m2.update(this._emptyFieldMessage)
                return;
            }
            if(document.querySelector('#tb-nickname').value.length > 20||document.querySelector('#tb-nickname').value.length < 5){
                let m2 = new MessageView(document.querySelector('#message2'))
                let message = new Message('The nickname field should have between 5 and 20 characters and should not have any special characters.');
                m2.update(message)
                return;
            }
            
            
        }
        this._secondPageView.update();
        this._pageIndex = 2;
        let headerIcon = document.querySelector("#item2")
        headerIcon.style.boxShadow = 'inset 0px -2px 0px #074ee8';
        headerIcon.style.color = '#074ee8'
        let headerIcon2 = document.querySelector("#item1")
        headerIcon2.style.boxShadow = 'inset 0px -2px 0px #767676';
        headerIcon2.style.color = '#767676'
        let headerIcon3 = document.querySelector("#item3")
        headerIcon3.style.boxShadow = 'inset 0px -2px 0px ##767676';
        headerIcon3.style.color = '#767676'
    }
    gotoThirdPage(){
        if(this._pageIndex == 1){
            let validationFailed = false;
            let areFieldsEmpty = false;
            if(!ValidationHelper.isNameValid(document.querySelector('#tb-name').value) ){
                document.querySelector('#tb-name').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-name').style.borderColor = '';
                validationFailed = true;
            }
            if(document.querySelector('#tb-name').value === ''){
                document.querySelector('#tb-name').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-name').style.borderColor = '';
                areFieldsEmpty = true;
            }

            if(!ValidationHelper.isNicknameValid(document.querySelector('#tb-nickname').value)){
                document.querySelector('#tb-nickname').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-nickname').style.borderColor = '';
                validationFailed = true;
            }
            if(!ValidationHelper.isEmailValid(document.querySelector('#tb-email').value) ){
                document.querySelector('#tb-email').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-email').style.borderColor = '';
                validationFailed = true;
            }
            if(document.querySelector('#tb-email').value === ''){
                document.querySelector('#tb-email').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-email').style.borderColor = '';
                areFieldsEmpty = true;
            }
            if(!ValidationHelper.isPhoneValid(document.querySelector('#tb-phone').value.replace('(','').replace(')','').replace('-','').replace(' ',''))){
                document.querySelector('#tb-phone').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-phone').style.OutlineColor = 'blue';
                validationFailed = true;
            }
            if(validationFailed){
                
                let m1 = new MessageView(document.querySelector('#message1'))
                m1.update(this._wrongInfoMessage)
                if(areFieldsEmpty){
                    let m2 = new MessageView(document.querySelector('#message2'))
                    
                    m2.update(this._emptyFieldMessage)
                }
                return;
            }
            if(areFieldsEmpty){
                let m2 = new MessageView(document.querySelector('#message2'))
                
                m2.update(this._emptyFieldMessage)
                return;
            }
            if(document.querySelector('#tb-nickname').value.length > 20||document.querySelector('#tb-nickname').value.length < 3){
                let m2 = new MessageView(document.querySelector('#message2'))
                let message = new Message('The nickname field should have between 3 and 20 characters and should not have any special characters.');
                m2.update(message)
                return;
            }
        }
        if(this._pageIndex = 2){
            let validationFailed = false;
            let isEmpty = false;
            if(!ValidationHelper.isUrlValid(document.querySelector('#tb-linkedin').value) ){
                document.querySelector('#tb-linkedin').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-linkedin').style.borderColor = '';
                validationFailed = true;
            }
            if(!ValidationHelper.isUrlValid(document.querySelector('#tb-github').value) ){
                document.querySelector('#tb-github').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-github').style.borderColor = '';
                validationFailed = true;
            }
            if(document.querySelector('#tb-github').value == ''){
                document.querySelector('#tb-github').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-github').style.borderColor = '';
                isEmpty = true;
            }
            if(isEmpty){
                let m2 = new MessageView(document.querySelector('#message2'))
                
                m2.update(this._emptyFieldMessage)
                return;
            }
            if(document.querySelector('#tb-github').value.length > 20||document.querySelector('#tb-github').value.length < 3){
                let m2 = new MessageView(document.querySelector('#message2'))
                let message = new Message('The nickname field should have between 3 and 20 characters and should not have any special characters.');
                m2.update(message)
                return;
            }
        }
        this._thirdPageView.update();
        this._pageIndex = 3;
        let headerIcon = document.querySelector("#item3")
        headerIcon.style.boxShadow = 'inset 0px -2px 0px #074ee8';
        headerIcon.style.color = 'Blue'
        let headerIcon2 = document.querySelector("#item2")
        headerIcon2.style.boxShadow = 'inset 0px -2px 0px #767676';
        headerIcon2.style.color = '#767676'
        let headerIcon3 = document.querySelector("#item1")
        headerIcon3.style.boxShadow = 'inset 0px -2px 0px ##767676';
        headerIcon3.style.color = '#767676'
    }
}