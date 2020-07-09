$(function(){
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
  })
})