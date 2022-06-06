class FormController{
    constructor(){
        this._certificateID = 1;
        let $ = document.querySelector.bind(document);
        this._previousDay = '';
        this._months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        
        this._inputCertificate = document.querySelectorAll(".certificates .main-tb input")
        this._certificateView = new CertificateView($('.certificates'), this._certificateID);

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

        this._tableView = new TableView($('#root'));
        this._rowView = new RowView($('.table-body'));

        this._listPerson = []
    }

    addCertificateInput(){
        
        this._inputCertificate = document.querySelectorAll('.certificates .main-tb input')
        console.log(this._inputCertificate)
        let temp = ['','','','',''];
        let index = 0
        this._inputCertificate.forEach(element => {
            console.log("o id do element é "+element.id)
            temp[index] = document.getElementById(element.id).value
            
            index++;

        })
        index = 0;


        this.inputCertificateValues
        let $ = document.querySelector.bind(document);
        this._certificateView = new CertificateView($('.certificates'), this._certificateID);
        
        if(this._inputCertificate.length < 4){
               
            
            this._certificateView.update()
            this._certificateID++
            console.log("o id é "+this._certificateID)  
            let index = 0
            this._inputCertificate.forEach(element => {
            console.log("o id do element é "+element.id)
            document.getElementById(element.id).value = temp[index] 
            
            index++;
            })
            index = 0;
            if(this._inputCertificate.length >= 1){
                console.log('entrou no botao')
                document.querySelector(".trash-btn").style.display = "block"
            }
            
        }
        if(this._inputCertificate.length == 4){
            this._certificateView.update()
            this._certificateID++
            console.log("o id é "+this._certificateID)  
            let index = 0
            this._inputCertificate.forEach(element => {
            console.log("o id do element é "+element.id)
            document.getElementById(element.id).value = temp[index] 
            
            index++;
            })
            index = 0;
            if(this._inputCertificate.length >= 1){
                console.log('entrou no botao')
                document.querySelector(".trash-btn").style.display = "block"
            }
            
                document.querySelector('.more-btn-box').style.display = 'none';
                document.querySelector('.certificates').style.marginBottom = '80px';
            
        }
        
    }
    removeCertificateInput(event, id){
        this._inputCertificate = document.querySelectorAll(".certificates .main-tb input")
        let _inputCertificate2 = document.querySelector(`#tb${id}`);
        
        let $ = document.querySelector.bind(document);
        this._certificateView = new CertificateView($('.certificates'), this._certificateID);
        let remove = el => el.parentElement.removeChild(el);
        document.querySelector('.more-btn-box').style.display = 'flex';
        document.querySelector('.certificates').style.marginBottom = '0px';
        if(this._inputCertificate.length <= 2){
            console.log('saiu do botao')
            document.querySelector(".trash-btn").style.display = "none"
        }
        if(this._inputCertificate.length > 1){
            remove(_inputCertificate2);
            
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
        document.querySelector('#tb-name').value = localStorage.getItem('name');
        document.querySelector('#tb-nickname').value = localStorage.getItem('nickname');
        document.querySelector('#tb-email').value = localStorage.getItem('email');
        document.querySelector('#tb-phone').value = localStorage.getItem('phone');
        document.querySelector('#tb-age').value = localStorage.getItem('age');
        
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
            console.log(document.querySelector('#tb-phone').value.replace('(','').replace(')','').replace('\"','').replace('-',''))
            if(!ValidationHelper.isPhoneValid(document.querySelector('#tb-phone').value.replace('(','').replace(')','').replace('\"','').replace('-',''))){
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
        if(this._pageIndex == 1){
            localStorage.setItem('name',document.querySelector('#tb-name').value)
            localStorage.setItem('nickname',document.querySelector('#tb-nickname').value)
            localStorage.setItem('email',document.querySelector('#tb-email').value)
            localStorage.setItem('phone',document.querySelector('#tb-phone').value)
            localStorage.setItem('age',document.querySelector('#tb-age').value)
        }
        if(this._pageIndex == 3){
            let index2 = 0
            this._inputCertificate.forEach(element => {
            if(element){
                localStorage.setItem(`certificate${index2+1}`,element.value)
            }else{
                localStorage.setItem(`certificate${index2+1}`,'')
            }
            index2++
            })
            index2 = 0
            localStorage.setItem('teamName',document.querySelector('#tb-team-name').value)
            localStorage.setItem('institution',document.querySelector('#tb-institution').value)
            localStorage.setItem('graduation',document.querySelector('#tb-graduation').value)
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
        
            document.querySelector('#tb-linkedin').value = localStorage.getItem('linkedin');
            document.querySelector('#tb-github').value = localStorage.getItem('github');
        this._pageIndex =2;
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
            console.log(document.querySelector('#tb-phone').value.replace('(','').replace(')','').replace('\"','').replace('-',''))
            if(!ValidationHelper.isPhoneValid(document.querySelector('#tb-phone').value.replace('(','').replace(')','').replace('\"','').replace('-',''))){
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
        if(this._pageIndex = 2){
            let validationFailed = false;
            let isEmpty = false;
            if(!ValidationHelper.isUrlValid(document.querySelector('#tb-linkedin').value) ){
                console.log("entrou 1")
                document.querySelector('#tb-linkedin').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-linkedin').style.borderColor == '';
                validationFailed = true;
                if(document.querySelector('#tb-linkedin').value == ''){
                    validationFailed = false;
                    document.querySelector('#tb-linkedin').style.backgroundColor = 'white';
                document.querySelector('#tb-linkedin').style.borderColor == '';
                }
            }
            
            if(!ValidationHelper.isUrlValid(document.querySelector('#tb-github').value) ){
                console.log("entrou 2")
                document.querySelector('#tb-github').style.backgroundColor = '#fcdde0';
                document.querySelector('#tb-github').style.borderColor == '';
                validationFailed = true;
                if(document.querySelector('#tb-github').value == ''){
                    validationFailed = false;
                    isEmpty = true;
                }
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
            if(validationFailed){
                let m1 = new MessageView(document.querySelector('#message1'))
                m1.update(this._wrongInfoMessage)
                return;
            }
            localStorage.setItem('linkedin',document.querySelector('#tb-linkedin').value)
            localStorage.setItem('github',document.querySelector('#tb-github').value)
            
        }
        

        
        this._thirdPageView.update();
        this.addCertificateInput();
        if(this._inputCertificate.length < 2){
            console.log('saiu do botao')
            document.querySelector(".trash-btn").style.display = "none"
        }

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
        
        let index2 = 0
        
        index2 = 0
        localStorage.setItem('teamName',document.querySelector('#tb-team-name').value)
        localStorage.setItem('institution',document.querySelector('#tb-institution').value)
        localStorage.setItem('graduation',document.querySelector('#tb-graduation').value)
        
    }
    gotoFourthPage(){
        let hasValidationFailed = false;
        let hasEmptyfields = false;

        hasValidationFailed = this.validateCertificates()
            
        
        if(!ValidationHelper.isUrlValid(document.querySelector('#tb-team-name').value)){
            document.querySelector('#tb-team-name').style.backgroundColor = '#fcdde0';
            hasValidationFailed = true
        }
        if(!ValidationHelper.isNameValid(document.querySelector('#tb-institution').value)){
            document.querySelector('#tb-institution').style.backgroundColor = '#fcdde0';
            hasValidationFailed = true
        }
        if(!ValidationHelper.isNameValid(document.querySelector('#tb-graduation').value)){
            document.querySelector('#tb-graduation').style.backgroundColor = '#fcdde0';
            hasValidationFailed = true
        }
        if(document.querySelector('#tb-team-name').value == ''){
            document.querySelector('#tb-team-name').style.backgroundColor = '#fcdde0';
            hasEmptyfields = true
        }
        if(document.querySelector('#tb-graduation').value == ''){
            document.querySelector('#tb-graduation').style.backgroundColor = '#fcdde0';
            hasEmptyfields = true
        }
        if(hasValidationFailed){
            
            
            let MsgView = new MessageView(document.querySelector('#message1'))
            MsgView.update(this._wrongInfoMessage);
            return;
        }
        if(hasEmptyfields){
            console.log("entrou aqui")
            
            let MsgView = new MessageView(document.querySelector('#message2'))
            MsgView.update(this._emptyFieldMessage);
            return;
        }
        let index2 = 0
        this._inputCertificate.forEach(element => {
            if(element){
                localStorage.setItem(`certificate${index2+1}`,element.value)
            }else{
                localStorage.setItem(`certificate${index2+1}`,'')
            }
            index2++
        })
        index2 = 0
        localStorage.setItem('teamName',document.querySelector('#tb-team-name').value)
        localStorage.setItem('institution',document.querySelector('#tb-institution').value)
        localStorage.setItem('graduation',document.querySelector('#tb-graduation').value)
        this._tableView.update();
        this._rowView = new RowView(document.querySelector('.table-body'));
        
        let person = new Person(localStorage.getItem('name'),localStorage.getItem('nickname'),localStorage.getItem('email'),localStorage.getItem('phone'),localStorage.getItem('age'),localStorage.getItem('linkedin'),localStorage.getItem('github'),localStorage.getItem('certificate1'),localStorage.getItem('certificate2'),localStorage.getItem('certificate3'),localStorage.getItem('certificate4'),localStorage.getItem('certificate5'),localStorage.getItem('teamName'),localStorage.getItem('institution'),localStorage.getItem('graduation'));
        this._listPerson.push(person);
        localStorage.clear();
        this._listPerson.forEach(p => {
            this._rowView.update(p.Person);
        })
    }
    validateCertificates(){
        let hasValidationFailed = false;

        this._inputCertificate = document.querySelectorAll('.certificates .main-tb input')
        console.log(this._inputCertificate)
        let temp = ['','','','',''];
        this._inputCertificate.forEach(element => {
            if(!ValidationHelper.isUrlValid(document.getElementById(element.id).value)){
                
                hasValidationFailed = true;
                
                element.style.backgroundColor = '#fcdde0';
                if(document.getElementById(element.id).value == ''){
                    hasValidationFailed = false;
                
                    element.style.backgroundColor = 'white'; 
                }
            }
        })
        
        return hasValidationFailed;
        
    }
    favourite(event, id){
        console.log("clicou no coracao")
        // this._inputCertificate = document.querySelectorAll(".certificates .main-tb input");
        // let _inputCertificate2 = document.querySelector(`#tb${id} .svg1`);
        // let _inputCertificate3 = document.querySelector(`#tb${id} .svg2`);
        // let $ = document.querySelector.bind(document);
        // this._certificateView = new CertificateView($('.certificates'), this._certificateID);
        // _inputCertificate2.style.display = 'none';
        // _inputCertificate3.style.display = 'block';
        
        // `#textbox${id}`
    }
}