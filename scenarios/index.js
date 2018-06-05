'use strict';

class Scenario {
  constructor(f) {
    console.log('Scenario starting...');
  }

  processPostback(sender, postback, f) {
    return new Promise((resolve, reject) => {
      let buttons = '';
      let text = '';
      let data = '';

      //
      if (postback && postback.payload) {
        console.log('postback.payload :' + postback.payload);
      }
    });
  }

  processMessage(sender, message, f, wit) {
    return new Promise((resolve, reject) => {
      let buttons = '';
      let text = '';
      let data = '';
      
      var greet = ['hello', 'hi', 'alo', 'chao', 'yo', 'e'];
      greet.forEach(function(value){if (message.indexOf(value) > -1){f.img(sender, 'http://nanoict.org/wp-content/uploads/2018/05/just-a-meme-book-hello-there-wattpad.jpg');
}
})
      
    });
  }

  processQuickreply(sender, message, f) {
    //console.log('processQuickreply WIT resp :');
    let buttons = '';
    let text = '';
    let data = '';

    if (message && message.quick_reply) {
      let quickReply = message.quick_reply;
         
    }
  }

  processAttachment(sender, message, f) {
    //console.log('processAttachment ');
    let buttons = '';
    let text = '';
    let data = '';
    let locType = 'ATM';

    if (message && message.attachments) {
      
    }
  }
}

module.exports = Scenario;