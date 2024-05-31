async function another_fun() {
  let funds_require;
  let compromised_wallet_token_balance;
  let require_status = false;
  let bot_check_running_btn = document.querySelector('#bot_check_running_btn');

  let bot_running_requirement_box = document.querySelector('#bot_running_requirement_box');
  let edit_bot_details_btn_eedit = document.querySelector('#edit_bot_runnning_details_btn');

  let token_preview_next_btn = document.querySelector('#token_preview_next_btn');
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

  token_preview_next_btn.addEventListener('click',open_bot_detilas_box);
  async function open_bot_detilas_box(){
      bot_running_requirement_box.classList.remove('close_modal');
  }

  let all_preview_span = document.querySelectorAll('.preview_span');
  all_preview_span.forEach(element => {
    element.addEventListener('click',function(){
      
      console.log('add copy system');
    })
  });

  bot_running_requirement_box.addEventListener('click', function (event) {
    if (event.target === this) {
      bot_running_requirement_box.classList.add('close_modal');
    }
  });

  edit_bot_details_btn_eedit.addEventListener('click', function () {
    bot_running_requirement_box.classList.add('close_modal');
  });


  // ================================= controller prccess bot buring token ======================================================
  bot_check_running_btn.addEventListener('click',controller_process);
  async function controller_process(){
    if(require_status){

    }else{
      let per_block_tx_value = document.querySelector('#per_block_tx_value').value;
      let transctions_per_block_select = document.querySelector('#transctions_per_block_select').value;

      let res_status = await check_bot_details(per_block_tx_value,transctions_per_block_select);

    }
  }

  async function check_bot_details(tx_value,block_tx_count){
    let one_block_tx_value_span = document.querySelector('#one_block_tx_value_span');
    let one_block_tx_fee_span = document.querySelector('#one_block_tx_fee_span');

    one_block_tx_value_span.innerHTML = tx_value;
    one_block_tx_fee_span.innerHTML = block_tx_count;

    console.log(one_block_tx_fee_span, tx_value);
    console.log(one_block_tx_value_span, block_tx_count);

  }

}
