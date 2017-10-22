//Classe em JavaScript
class Message{
  //Método novo de construtor
  //Pode-se inserir valores defalt no construtor
  constructor(text = 'defalt text', created = Date.now()){
    this.text = text;
    this._created = created;
  }
  //testando os get
  get created(){
    return this._created;
  }
  set created(created){
    this._created = created;
  }
  toString(){
    //Usar crase elimina a necessidade de concatenar
    return `Giovanni say's (${this._created}):
    ${this.text}`;
  }
}

//Uso de herança
class ImageMessage extends Message{
  constructor (text = '', created = Date.now(), url='', thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString(){
    return `${super.toString()} URL: ${this.url} Thumbnail: ${this.thumbnail}`;
  }
} 

var emptyMessage = new Message();
var textMessage = new Message('Olá galerinha!', Date.now() - 86400);
var imageMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(imageMessage));