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
      console.log(message.text);
      console.log(JSON.stringify(message));

      // test
      //       greet.forEach(function(value){
      //         if (message.indexOf(value) > -1){
      //           f.img(sender,'http://nanoict.org/wp-content/uploads/2018/05/just-a-meme-book-hello-there-wattpad.jpg');
      // }
      // })
     
      if (message.text === 'hi' || message.text === 'hello') {
//          f.txt(sender, 'Hãy gửi số 2');
//         return;
//       }
     
      
//       if (message.text === '2') {
        this.menuYesNo(sender, "Chào bạn, bạn có cần mình giúp không?", f) ;
        return;
      }
      
      if (message.text === '3') {
        this.showRegister(sender, f);
        return;
      }
      
      if (message.text === '4') {
        this.news(sender, f);
        return;
      }
      
      if (message.text === '5') {
        f.txt(sender, "https://www.google.com/maps");
        f.txt(sender, 'Ban tu google map nhe :D');
        this.showLocation(sender, f);
        return;
      }
     
      
      /*
      for (var item in ['hello', 'hi', 'alo', 'chao', 'yo', 'e', 'hey']) {
        if (message.text === item) {
          f.img(sender, 'http://nanoict.org/wp-content/uploads/2018/05/just-a-meme-book-hello-there-wattpad.jpg');
          return;
        }
      }
      */
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
      
      if(quickReply.payload === 'QnA_YES') {
        f.txt(sender,"Hãy gửi 3 để abc, 4 để xyz, 5 để tìm ATM gần nhất");
      }
      
      if(quickReply.payload === 'QnA_NO') {
        f.txt(sender, "Okay, have a good day");
      }
      
      
    }
  }

  processAttachment(sender, message, f) {
    //console.log('processAttachment ');
    let buttons = '';
    let text = '';
    let data = '';
    let locType = 'ATM';

    if (message && message.attachments) {
      let attach = message.attachments;
    

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
        },
          {content_type: 'text',
          title: 'Maybe',
          image_url: 'https://icons8.com/icon/46457/question-mark-outline',
          payload: 'QnA_noanswer'}
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
  
  news(id, f) {

   let obj = {
     recipient: {
       id: id
     },
     message: {
       attachment: {
         type: "template",
         payload: {
           template_type: "generic",
           elements: [{
               title: "VietinBank SME Club: Sự đón nhận từ cộng đồng doanh nghiệp",
               image_url: "http://cafefcdn.com/thumb_w/650/2017/vtb-1482312845555-1491215019360.jpg",
               subtitle: "Vừa ra mắt trong tháng 7/2017, VietinBank SME Club - Câu lạc bộ các thành viên là khách hàng doanh nghiệp vừa và nhỏ (SME) đã nhận được những lời ngợi khen từ khách hàng...",
               default_action: {
                 type: "web_url",
                 url: "http://www.vietinbank.vn/vn/tin-tuc/VietinBank-SME-Club-Su-don-nhan-tu-cong-dong-doanh-nghiep-20170909135227.html"
                 //messenger_extensions: true,
                 //webview_height_ratio: "tall",
                 //fallback_url: "https://ebanking.vietinbank.vn/rcas/portal/web/retail/bflogin"
               },
               buttons: [{
                 type: "web_url",
                 url: "http://www.vietinbank.vn/vn/tin-tuc/VietinBank-SME-Club-Su-don-nhan-tu-cong-dong-doanh-nghiep-20170909135227.html",
                 title: "Xem chi tiết"
               }, {
                 type: "postback",
                 title: "Đăng ký nhận tin",
                 payload: "NEWS_BOT"
               }]
             },
             {
               title: "VietinBank tuyển dụng gần 300 nhân sự cho chi nhánh",
               image_url: "https://thebank.vn/uploads/2014/03/Vietinbank-tuyen-dung.jpg",
               subtitle: "Đáp ứng yêu cầu nhân sự cho chiến lược phát triển, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) tuyển dụng gần 300 chỉ tiêu tại các vị trí nghiệp vụ và hỗ trợ tín dụng cho các chi nhánh trên toàn hệ thống...",
               default_action: {
                 type: "web_url",
                 url: "https://www.vietinbank.vn/vn/tin-tuc/VietinBank-tuyen-dung-gan-300-nhan-su-cho-chi-nhanh-20170807233640.html",
                 //messenger_extensions: true,
                 //webview_height_ratio: "tall",
                 //fallback_url: "https://peterssendreceiveapp.ngrok.io/"
               },
               buttons: [{
                 type: "web_url",
                 url: "https://www.vietinbank.vn/vn/tin-tuc/VietinBank-tuyen-dung-gan-300-nhan-su-cho-chi-nhanh-20170807233640.html",
                 title: "Xem chi tiết"
               }, {
                 type: "postback",
                 title: "Đăng ký nhận tin",
                 payload: "NEWS_BOT"
               }]
             },
             {
               title: "VietinBank SME Club: Sự đón nhận từ cộng đồng doanh nghiệp",
               image_url: "http://image.bnews.vn/MediaUpload/Medium/2017/05/04/090646-bo-nhan-dien-thuong-hieu-vietinbank-2017-1.jpg",
               subtitle: "Vừa ra mắt trong tháng 7/2017, VietinBank SME Club - Câu lạc bộ các thành viên là khách hàng doanh nghiệp vừa và nhỏ (SME) đã nhận được những lời ngợi khen từ khách hàng...",
               default_action: {
                 type: "web_url",
                 url: "http://www.vietinbank.vn/vn/tin-tuc/VietinBank-SME-Club-Su-don-nhan-tu-cong-dong-doanh-nghiep-20170909135227.html",
                 //messenger_extensions: true,
                 //webview_height_ratio: "tall",
                 //fallback_url: "https://peterssendreceiveapp.ngrok.io/"
               },
               buttons: [{
                 type: "web_url",
                 url: "http://www.vietinbank.vn/vn/tin-tuc/VietinBank-SME-Club-Su-don-nhan-tu-cong-dong-doanh-nghiep-20170909135227.html",
                 title: "Xem chi tiết"
               }, {
                 type: "postback",
                 title: "Đăng ký nhận tin",
                 payload: "NEWS_BOT"
               }]
             }
           ]
         }
       }
     }
   }

   console.log('--> news data: ' + JSON.stringify(obj));

   f.sendNews(obj)
     .catch(error => console.log('news: ' + error));
 }
  showLocation(sender, f) {
   let buttons = '';
   let text = '';
   let data = '';
   try {
     buttons = [{
       content_type: "location",
       payload: 'location'
     }];
     text = 'Hãy gửi vị trí bạn muốn tìm các địa điểm giao dịch gần nhất của VietinBank';

     f.quick(sender, {
       text,
       buttons
     });
   } catch (e) {
     console.log(e);
   }
 }
}

module.exports = Scenario;