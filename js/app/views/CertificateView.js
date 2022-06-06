class CertificateView extends View{
    constructor(element, id){
        super(element)
        this._id = id;
    }
    template(model){
        console.log(`tb${this._id}`)
        return `
        <div class="main-tb">
            
            <div class="tb-with-heart-box" id="tb${this._id}">
                <div class="tb-with-heart">
                    <input type="text" name="" id="textbox${this._id}" placeholder="https://linkedin.com/in/foo-bar-3a0560104/" onkeypress="style.backgroundColor = 'white'">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="formController.favourite(event, ${this._id})" class="svg1">
                    <g filter="url(#filter0_d_3297_1820)">
                    <path d="M15.6301 2.4574C15.247 2.07416 14.7922 1.77014 14.2916 1.56272C13.791 1.3553 13.2545 1.24854 12.7126 1.24854C12.1707 1.24854 11.6342 1.3553 11.1336 1.56272C10.633 1.77014 10.1782 2.07416 9.79509 2.4574L9.00009 3.2524L8.20509 2.4574C7.43132 1.68364 6.38186 1.24894 5.28759 1.24894C4.19331 1.24894 3.14386 1.68364 2.37009 2.4574C1.59632 3.23117 1.16162 4.28063 1.16162 5.3749C1.16162 6.46918 1.59632 7.51864 2.37009 8.2924L3.16509 9.0874L9.00009 14.9224L14.8351 9.0874L15.6301 8.2924C16.0133 7.90934 16.3174 7.45451 16.5248 6.95392C16.7322 6.45333 16.839 5.91677 16.839 5.3749C16.839 4.83304 16.7322 4.29648 16.5248 3.79589C16.3174 3.29529 16.0133 2.84047 15.6301 2.4574V2.4574Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_3297_1820" x="-3.83838" y="0.248535" width="25.6772" height="23.6738" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3297_1820"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3297_1820" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="formController.favourite(event, ${this._id})" class="svg2">
                    <g filter="url(#filter0_d_3297_1820)">
                    <path d="M15.6301 2.4574C15.247 2.07416 14.7922 1.77014 14.2916 1.56272C13.791 1.3553 13.2545 1.24854 12.7126 1.24854C12.1707 1.24854 11.6342 1.3553 11.1336 1.56272C10.633 1.77014 10.1782 2.07416 9.79509 2.4574L9.00009 3.2524L8.20509 2.4574C7.43132 1.68364 6.38186 1.24894 5.28759 1.24894C4.19331 1.24894 3.14386 1.68364 2.37009 2.4574C1.59632 3.23117 1.16162 4.28063 1.16162 5.3749C1.16162 6.46918 1.59632 7.51864 2.37009 8.2924L3.16509 9.0874L9.00009 14.9224L14.8351 9.0874L15.6301 8.2924C16.0133 7.90934 16.3174 7.45451 16.5248 6.95392C16.7322 6.45333 16.839 5.91677 16.839 5.3749C16.839 4.83304 16.7322 4.29648 16.5248 3.79589C16.3174 3.29529 16.0133 2.84047 15.6301 2.4574V2.4574Z" stroke="#074ee8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_3297_1820" x="-3.83838" y="0.248535" width="25.6772" height="23.6738" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3297_1820"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3297_1820" result="shape"/>
                    </filter>
                    </defs>
                    </svg>  
                    
                    </div>
                    <div class="trash-btn" id="trash${this._id}" onclick="formController.removeCertificateInput(event, ${this._id})">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </div>
        </div>
    `
    }
    update(model){//this should be concatenated inside the div that contains the first certificate input box
        this._element.innerHTML += this.template(model);
    }
}