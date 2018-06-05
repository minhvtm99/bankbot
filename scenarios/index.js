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
      
      f.txt(sender, 'hello');
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