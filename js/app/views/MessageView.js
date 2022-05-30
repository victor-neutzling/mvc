class MessageView extends View{
    constructor(element){
        super(element);
    }
    template(model){
        return model.text ? `<p class="message">${model.text}</p>` : '<p></p>'
        //if model.text is empty, returns empty <p> block, if not, returns message.
    }
}