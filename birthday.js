//Create references to the dropdown's
const daySelect = document.getElementById("day")
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById("year");

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];


(function favoritesMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "01";
})();

let previousDay;

function favoritesDays(month){
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;
        if(month === '01' || month === '03' || 
        month === '05' || month === '07' || month === '08' 
        || month === '10' || month === '12') {
            dayNum = 31;
        } else if(month === '04' || month === '06' 
        || month === '09' || month === '11') {
            dayNum = 30;
        }else{
            if(new Date(year, 1, 29).getMonth() === 1){
                dayNum = 29;
            }else{
                dayNum = 28;
            }
        }
    //Insert the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}
function favoritesYears(){
    //Get the current year
    let year = new Date().getFullYear();
    //Make 121 years an option (in 03/2022)
    for(let i = 0; i < 121; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

favoritesDays(monthSelect.value);
favoritesDays();

yearSelect.onchange = function() {
    favoritesDays(monthSelect.value);
}
monthSelect.onchange = function() {
    favoritesDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
}