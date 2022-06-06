class TableView extends View{
    constructor(element){
        super(element);
    }
    template(model){
        return `
        <div class="table-box">
        <table>
        <tbody class="table-body">
          <tr>
              <td class="primeira-td">Full Name</td>
              <td class="primeira-td">Nickname</td>
              <td class="primeira-td">Email</td>
              <td class="primeira-td">Phone</td>
              <td class="primeira-td">Age</td>
              <td class="primeira-td">Linkedin</td>
              <td class="primeira-td">Github</td>
              <td class="primeira-td">Certificates</td>
              <td class="primeira-td">Team Name</td>
              <td class="primeira-td">Institution</td>
              <td class="primeira-td">Graduation</td>
          </tr>
          </tbody>  
      </table>
      </div>
      <div class="next-btn-box">
        <div class="next-btn" onclick="formController.gotoFirstPage()">
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
        `;
    }
    
}