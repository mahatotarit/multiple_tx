async function token_fun(){
    async function set_step_open_fun(){
        let all_step_open_div = document.querySelectorAll('.step_open_step_div');
        all_step_open_div.forEach((element) => {
            element.addEventListener('click', action_step_div);
            function action_step_div() {
               let select_parent_div = element.parentElement.parentElement;
               let collapce_box = select_parent_div.querySelector('.collapce_box');
               let step_description = select_parent_div.querySelector('.step_description');

               collapce_box.classList.toggle('open_collapce_box'); 
               step_description.classList.toggle('open_step_desc'); 
               element.classList.toggle('border_round_all');

               console.log(step_description);
               console.log(select_parent_div);
               console.log('ok');
            }
        });
    }
    set_step_open_fun();
}