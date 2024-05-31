async function another_fun() {

  let edit_preview_details_btn = document.querySelector('#edit_preview_details_btn');
  let token_preview_box = document.querySelector('#token_preview_box');
  edit_preview_details_btn.addEventListener('click',function(){
     token_preview_box.classList.add('close_modal');
  });

  token_preview_box.addEventListener('click', function (event) {
    if (event.target === this) {
      token_preview_box.classList.add('close_modal');
    }
  });

  let all_preview_span = document.querySelectorAll('.preview_span');
  all_preview_span.forEach(element => {
    element.addEventListener('click',function(){
      
      console.log('add copy system');
    })
  });

  let bot_running_requirement_box = document.querySelector('#bot_running_requirement_box');
  bot_running_requirement_box.addEventListener('click', function (event) {
    if (event.target === this) {
      bot_running_requirement_box.classList.add('close_modal');
    }
  });

  let edit_bot_details_btn_eedit = document.querySelector('#edit_bot_runnning_details_btn');
  edit_bot_details_btn_eedit.addEventListener('click', function () {
    bot_running_requirement_box.classList.add('close_modal');
  });

}
