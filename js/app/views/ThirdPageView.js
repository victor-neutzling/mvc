class ThirdPageView extends View{
    constructor(element){
        super(element);
    }
    template(model){
        return `
        <div class="certificates">
        <div class="main-tb" >
            <h3>Certificates</h3>
            
        </div>
    </div>
    <div class="more-btn-box">
        <div class="next-btn" onclick="formController.addCertificateInput(event)">
            <img class= "plus-icon"src="./img/Leading Icon.png" alt="">
            <h1>More</h1>
            <img class="arrow-icon" src="./img/right-arrow-icon.png" alt="">
            <img class="blue-arrow-icon" src="img/Vector(6).png" alt="">
        </div>
    </div>
    
    <div class="main-tb" >
        <h3>Team Name *</h3>
        <input type="text" name="" id="tb-team-name"  placeholder="https://linkedin.com/in/foo-bar-3a0560104/" onkeypress="style.backgroundColor = 'white'">
    </div>
    <div class="main-tb">
        <h3>Institution</h3>
        <input type="text" name="" id="tb-institution" placeholder="Universidade Federal da Paraíba" onkeypress="style.backgroundColor = 'white'">
    </div>
    <div class="main-tb">
        <h3>Graduation *</h3>
        <input type="text" name="" id="tb-graduation" placeholder="Ciências da Computação" onkeypress="style.backgroundColor = 'white'">
    </div>
    <div class="messages">
                <div id="message1"></div>
                <div id="message2"></div>
            </div>
    <div class="next-btn-box">
        <div class="next-btn" onclick="formController.gotoFourthPage()">
            <div class="arrow-icon2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4.5L6.75 12.75L3 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <div class="blue-arrow-icon2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4.5L6.75 12.75L3 9" stroke="#074ee8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <h1 class="white-text">Finish</h1>
            <h1 class="blue-text">Finish</h1>
        </div>
    </div>

        `
    }
}