export default () => {
    const container = document.createElement("div");
    
    const template = `
    <div class="main-tb">
    
            <h3>Full name *</h3>
            <input type="text" name="" id=""placeholder="Foo Bar">
        </div>
        
        <div class="main-tb">
            <h3>Nickname</h3>
            <input type="text" name="" id="" placeholder="Juanito">
        </div>

        <div class="email-phone">
            <div class="email">
                <h3>Email *</h3>
                <input type="text" name="" id="" placeholder="foo@bar.com">   
            </div>
    
            <div class="phone">
                <h3>Phone</h3>
                <input type="text" name="" id=""placeholder="(83)00000-0000">
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
                     <select name="month" id="month"></select>
                 </div>
            </div>
            
            <div class="bd-part2">
                <div class="tb-date">
                    <h2>Year</h2>
                    <select name="year" id="year"></select>
                </div>
                <div class="tb-date">
                    <h2>Age</h2>
                    <input class="tb-age" type="text" name="" id="">
                </div>
            </div> 
        </section> 
        <div class="terms-of-service">
            <input type="checkbox" name="" id="">
            <h2>I accept the terms and privacy</h2>
        </div>
        <div class="next-btn-box">
        <a  href="/#SecondTab">
        <div class="next-btn">
                <h1>Next</h1>
                <img class="arrow-icon" src="./img/right-arrow-icon.png" alt="">
                <img class="blue-arrow-icon" src="img/Vector(6).png" alt="">
            </div>
            </a>
        </div>
    `;

    container.innerHTML = template;
    return container;
}