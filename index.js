import home from "./Pages/First Tab/main.js";
import about from "./Pages/Third Tab/main.js";
import contact from "./Pages/Second Tab/main.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash) {
            case " ":
                main.appendChild(home());
                
                break;
            case "#SecondTab":
                main.appendChild(about());
                break; 
            case "#ThirdTab":
                main.appendChild(contact());
                break;
            default:
                main.appendChild(home());
                
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})
