//Importando as classes
const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');

class MessagesService{
  constructor(){
    let resolvePromisse;
    let rejectPromisse;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagesPromisse = new Promise((resolve, reject) => {
      resolvePromisse = resolve;
      rejectPromisse = reject;
    });
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err){
        rejectPromisse(err);
      }else{
        const dataArray = JSON.parse(data);
        const dataObject = dataArray.map((item) => {
          return new Message(item.text, item.created);
        });
        resolvePromisse(dataObject);
      }
    });
  }
  get messages(){
    return this.messagesPromisse;
  }
}

const messagesService = new MessagesService();
messagesService.messages.then((messages) => {
  for (let x = 0; x < messages.length; x++){
    console.log(String(messages[x]));
  }
}).catch((err) => {
  console.log(err);
});
