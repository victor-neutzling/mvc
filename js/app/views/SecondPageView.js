class SecondPageView extends View{
    constructor(element){
        super(element);
    }
    template(model){
        return `<div class="main-tb">
        <h3>LinkedIn</h3>
        <input type="text" name="" id="tb-linkedin" placeholder="https://linkedin.com/in/foo-bar-3a0560104/">
            </div>
            
            <div class="main-tb">
                <h3>Github *</h3>
                <input type="text" name="" id="tb-github" placeholder="https://github.com/foobar">
            </div>
            <div class="next-btn-box" onclick="formController.gotoThirdPage()">
            
            <div class="next-btn">
                    <h1>Next</h1>
                    <img class="arrow-icon" src="./img/right-arrow-icon.png" alt="">
                    <img class="blue-arrow-icon" src="img/Vector(6).png" alt="">
                </div>
            </div>  
            
        `;
    }
}