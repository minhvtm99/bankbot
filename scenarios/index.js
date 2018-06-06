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


      // test
      //       greet.forEach(function(value){
      //         if (message.indexOf(value) > -1){
      //           f.img(sender,'http://nanoict.org/wp-content/uploads/2018/05/just-a-meme-book-hello-there-wattpad.jpg');
      // }
      // })
      if (message === '1') {
        f.img(sender, 'http://nanoict.org/wp-content/uploads/2018/05/just-a-meme-book-hello-there-wattpad.jpg');
      }
      
      if (message === '2') {
        this.menuYesNo(sender, "Ban chon option nao", f) ;
      }
      
      
      if (message === '3') {
        this.showRegister(sender, f);
      }
      
      
      for (var item in ['hello', 'hi', 'alo', 'chao', 'yo', 'e']) {
        if (message.indexOf(item) > -1) {
          f.img(sender, 'http://nanoict.org/wp-content/uploads/2018/05/just-a-meme-book-hello-there-wattpad.jpg');
        }
      }
      // end test

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

  menuYesNo(sender, textContent, f) {
    let text = textContent;
    let buttons = '';

    try {
      buttons = [{
          content_type: "text",
          title: "Có",
          image_url: "https://png.icons8.com/color/50/000000/thumb-up.png",
          payload: 'QnA_YES'
        },
        {
          content_type: "text",
          title: "Không",
          image_url: "https://png.icons8.com/color/50/000000/poor-quality.png",
          payload: 'QnA_NO'
        }
      ];

      f.quick(sender, {
        text,
        buttons
      });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }
  
  showRegister(sender, f) {
    let buttons = '';
    let text = '';
    let data = '';

    try {
      data = {
        text: 'Bạn muốn đăng ký dịch vụ nào của VietinBank?',
        buttons: [{
            type: 'web_url',
            title: 'FinBot',
            url: 'http://hungpt.handcraft.com/index.html?fbid=' + sender
          },
          {
            type: 'web_url',
            title: 'iPay',
            url: 'https://ebanking.vietinbank.vn/register/'
          },
          {
            type: 'web_url',
            title: 'eFAST',
            url: 'https://www.vietinbank.vn/web/home/vn/product/dang-ky-truc-tuyen.html'
          }
        ]
      }

      f.btn(sender, data);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Scenario;