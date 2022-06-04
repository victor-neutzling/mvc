class FirstPageView extends View{
    constructor(element){
        super(element);
    }
    template(model){
        return `
        <div class="main-tb">
    
        <h3>Full name *</h3>
        <input type="text" name="" id="tb-name"placeholder="Foo Bar"onkeypress="style.backgroundColor = 'white'">
    </div>
    
    <div class="main-tb">
        <h3>Nickname</h3>
        <input type="text" name="" id="tb-nickname" placeholder="Juanito"onkeypress="style.backgroundColor = 'white'">
    </div>
    
    <div class="email-phone">
        <div class="email">
            <h3>Email *</h3>
            <input type="text" name="" id="tb-email" placeholder="foo@bar.com"onkeypress="style.backgroundColor = 'white'">   
        </div>
    
        <div class="phone">
            <h3>Phone</h3>
            <input type="text" name="" id="tb-phone" placeholder="(83)00000-0000"onkeypress="style.backgroundColor = 'white'">
        </div>
    </div>
    
    <h2 class="birthday-title">Birthday *</h2>
    
    <section class="birthday">
        <div class="bd-part1">
            <div class="tb-date">
                <h2>Day</h2>
                 <select name="day" id="day"></select> 
             </div>
             
             <div class="tb-date">
                 <h2>Month</h2>
                 <select name="month" id="month" onchange="DateHelper.addDays();DateHelper.checkLeapYear()"></select>
             </div>
        </div>
        
        <div class="bd-part2">
            <div class="tb-date">
                <h2>Year</h2>
                <select name="year" id="year" onchange="DateHelper.checkLeapYear()"></select>
            </div>
            <div class="tb-date">
                <h2>Age</h2>
                <input class="tb-age" type="text" name="" id="">
            </div>
        </div> 
    </section> 
    <div class="terms-of-service">
        <input type="checkbox" name="cb-terms" id="">
        <h2>I accept the terms and privacy</h2>
    </div>
    <div class="messages">
        <div id="message1"></div>
        <div id="message2"></div>
    </div>  
    <div class="next-btn-box" onclick="formController.gotoSecondPage()">
      <div class="next-btn">
              <h1>Next</h1>
              <img class="arrow-icon" src="./img/right-arrow-icon.png" alt="">
              <img class="blue-arrow-icon" src="img/Vector(6).png" alt="">
          </div>
          
      </div>
        `;
    }
}