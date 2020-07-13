$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main__message-list--block" data-message-id=${message.id}>
          <div class="header">
            <div class="header__name">
              ${message.user_name}
            </div>
            <div class="header__date">
              ${message.created_at}
            </div>
          </div>
          <div class="body">
            <p class="body__content">
              ${message.message}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main__message-list--block" data-message-id=${message.id}>
        <div class="header">
          <div class="header__name">
            ${message.user_name}
          </div>
          <div class="header__date">
          ${message.created_at}
          </div>
        </div>
        <div class="body">
          <p class="body__content">
            ${message.message}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    let last_message_id = $('.main__message-list--block:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0){
        let insertHTML = '';
        console.log(messages);
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
          console.log(insertHTML);
        });
        $('.main__message-list--block').append(insertHTML);
        $('.main__message-list--block').animate({ scrollTop: $('.main__message-list--block')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('ここのエラーだよね');
    });
  };

  reloadMessages();

  //setInterval(reloadMessages, 7000);
})