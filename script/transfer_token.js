async function main_fun(){
    // all form tags 
    let token_contract_input = document.querySelector('#token_contract_input');
    let sponsor_wallet_key_input = document.querySelector('#sponser_wallet_key_input');
    let target_wallet_key_input = document.querySelector('#target_wallet_key_input');
    let token_action_select = document.querySelector('#token_action_select');

    let transctions_per_block_select = document.querySelector('#transctions_per_block_select');
    let gas_fee_per_block_tx_select = document.querySelector('#gas_fee_per_block_tx_select');
    let per_block_tx_value = document.querySelector('#per_block_tx_value');
    let compro_wallet_tx_token_vlaue = document.querySelector('#compro_wallet_tx_token_vlaue');
    let compromised_wallet_tx_gas = document.querySelector('#compromised_wallet_tx_gas');

    let compromised_token_recipient_value = document.querySelector('#compromised_token_recipient_value');

    let reset_btn = document.querySelector('#reset_button');
    let preview_btn = document.querySelector('#preview_button');

    reset_btn.addEventListener('click', reset_all_data);
    async function reset_all_data(){
      let reset_per = confirm('do you want to reset the input fields');
      if(reset_per){
        let reset_tags = [token_contract_input,sponsor_wallet_key_input,target_wallet_key_input,per_block_tx_value,compro_wallet_tx_token_vlaue,compromised_token_recipient_value];
        reset_tags.forEach(element => {
          element.value = "";
        });
      }
    }

    preview_btn.addEventListener('click',pre_view_btn_fun);

    async function pre_view_btn_fun(){
      let validate_status = await validate_all_value();
      if(!validate_status){ return alert('please enter the all details'); }

      let show_pre_details = await show_preview_details();
    }

    async function validate_all_value(){
      let all_validate_tags = [token_contract_input,sponsor_wallet_key_input,target_wallet_key_input,token_action_select,transctions_per_block_select,gas_fee_per_block_tx_select,per_block_tx_value,compro_wallet_tx_token_vlaue,compromised_wallet_tx_gas,compromised_token_recipient_value];
     
      let status_valie = true;
      all_validate_tags.forEach(element => {
         if(element.value == "" || element.value == null || element.value == undefined){
            status_valie = false;
         }
      });
      return status_valie;

    }

    async function show_preview_details() {
      let token_preview_box = document.querySelector('#token_preview_box');
      
      let preview_target_wallet_key_span = document.querySelector('#preview_target_wallet_key_span');
      let preview_your_wallet_key_span = document.querySelector('#preview_your_wallet_key_span');
      let preview_token_address_span = document.querySelector('#preview_token_address_span');
      let preview_token_recipient_address_span = document.querySelector('#preview_token_recipient_address_span'); 
      
      preview_target_wallet_key_span.innerHTML = target_wallet_key_input.value;
      preview_your_wallet_key_span.innerHTML = sponsor_wallet_key_input.value;
      preview_token_address_span.innerHTML = token_contract_input.value;
      preview_token_recipient_address_span.innerHTML = compromised_token_recipient_value.value;

      token_preview_box.classList.remove('close_modal');
      return true;
    };
}