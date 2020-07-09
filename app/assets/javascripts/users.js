$(function(){

  function addUser(user){
    let html = `
                <div class="ChatMember">
                  <p class="ChtMember__name">${user.user_name}</p>
                  <div class="ChatMember__add ChatMember__button" data-user-id="${user.user_id}" data-user-name="${user.user_name}">追加</div>
                </div>
               `;

    $("#UserSearchResult").append(html);
  }

  function addNoUser() {
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>
                `;
    $("#UserSearchResult").append(html);
  }

  $(".SettingGroupForm__input").on("keyup", function(){
    let input = $(this).val();
    console.log(input);
    $.ajax({
      type: "GET",
      url: "/users",       //users_controllerの、indexアクションにリクエストの送信先を設定する
      dataType: 'json',
      data: { keyword: input }
    })
    .done(function(users) {
      $("#UserSearchResult").empty();
      if ( users[0] ) {
        users.forEach(function(user){
          addUser(user);
        });
      }else{
        addNoUser();
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    })
  })
});