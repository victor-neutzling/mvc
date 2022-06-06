class RowView extends View{
    constructor(element){
        super(element);
        console.log(element)
    }
    template(model){
        if(model[7] == null){
            model[7] = '';
        }if(model[8] == null){
            model[8] = '';
        }if(model[9] == null){
            model[9] = '';
        }if(model[10] == null){
            model[10] = '';
        }if(model[11] == null){
            model[11] = '';
        }
        return`
        <tr>
        <td>${model[0]}</td>
        <td>${model[1]}</td>
        <td>${model[2]}</td>
        <td>${model[3]}</td>
        <td>${model[4]}</td>
        <td>${model[5]}</td>
        <td>${model[6]}</td>
        <td>${model[7]}<br>${model[8]}<br>${model[9]}<br>${model[10]}<br>${model[11]}</td>
        <td>${model[12]}</td>
        <td>${model[13]}</td>
        <td>${model[14]}</td>
        </tr>
    `;
    }
    update(model){//this should be concatenated inside the div that contains the first certificate input box
        console.log("entrou aqui")
        this._element.innerHTML += this.template(model);
    }
}