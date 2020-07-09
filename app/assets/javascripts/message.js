$(function(){

  function buildHTML(message){
    if ( message.image.url ) {
      let html =
        `<div class="main__message-list--block">
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
            <img class="Message__image" src="${message.image.url}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main__message-list--block">
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

  $(".form").on("submit", function(e){
    console.log("ok");
    e.preventDefault();
    let url = $(this).attr('action');
    let formData = new FormData(this);
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main__message-list').append(html);
      $('.main__message-list').animate({ scrollTop: $('.main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__btn--send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
})