class ThirdPageView extends View{
    constructor(element){
        super(element);
    }
    template(model){
        return `
        <div class="certificates">
        <div class="main-tb">
            <h3>Certificates</h3>
            <div class="tb-with-heart-box">
                <div class="tb-with-heart">
                    <input type="text" name="" id="" placeholder="https://linkedin.com/in/foo-bar-3a0560104/">
                    <img src="./img/Trailing Icon.png" alt="">
                    
                    
                    </div>
                    <div class="trash-btn" onclick="formController.removeCertificateInput(event)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </div>
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
    
    <div class="main-tb">
        <h3>Team Name *</h3>
        <input type="text" name="" id="" placeholder="https://linkedin.com/in/foo-bar-3a0560104/">
    </div>
    <div class="main-tb">
        <h3>Institution</h3>
        <input type="text" name="" id="" placeholder="Universidade Federal da Paraíba">
    </div>
    <div class="main-tb">
        <h3>Graduation *</h3>
        <input type="text" name="" id="" placeholder="Ciências da Computação">
    </div>
    <div class="next-btn-box">
        <div class="next-btn">
            <h1 class="white-text">Next</h1>
            <h1 class="blue-text">Next</h1>
            <img class="arrow-icon"src="./img/right-arrow-icon.png" alt="">
            <img class="blue-arrow-icon" src="img/Vector(6).png" alt="">
        </div>
    </div>
        `
    }
}