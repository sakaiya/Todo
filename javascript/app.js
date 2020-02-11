
function addTodo() {
  var value = $('#textbox').val();
  if (value.lenght === 0) {
    return;
  }
  var html = `<p><span>${value}</span><input type="button" value="消去" onclick="removeTodo(this)" >.<input type="button" value="編集" onclick="edit(this)"></p>`
  $('#todolist').append(html);
  console.log(html);
}

function removeTodo(button) {
  if (confirm('削除')) {
    $(button).parent().remove();
  }
}
$('.allRemovetodo').on('click', function () {
  $('#todolist').empty();
});


function edit(button){
  var target = $(button).prev().prev();
  var value = $('#textbox').val();
  if (value.lenght === 0) {
    return;
  }
  target.text(value);
}