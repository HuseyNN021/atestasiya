class Message{
    constructor(authorName,text){
       this.authorName=authorName;
       this.text=text;
       this.time= new Date()
    } 
    toString(){
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.authorName}: ${this.text}`
    }
   
}


class Messenger extends Message{
    constructor(authorName,text){
        super(authorName,text)
        this.getvalues=[];
    }
    send(author,text){
        this.authorName=author
        this.text=text
        this.getvalues.push(`${this.time.getHours()}:${this.time.getMinutes()} ${this.authorName}: ${this.text}`)
    }
    show_history(){
        this.getvalues.forEach(item=>{
            console.log(item);
        })
    }
}


let info = new Messenger()
info.send("Huseyn","ilk mesaj")
info.send("Rufet","Ikinci mesaj")
console.log(info.getvalues); 
info.show_history()