$(document).ready(function() {
 
  let name = 'Free 5';
  let password = 'Qwer123';
  let score = '5'; 
  let tel = '0'


  let nameField = jQuery('#txt_Name');
  let passwordField = jQuery('#txt_Password');
  let scoreField = jQuery('#txt_scoreNum');
  let telField = jQuery('#txt_Tel');


  nameField.val(name);
  passwordField.val(password);
  scoreField.val(score);
  telField.val(tel);

  window.setTimeout(() => {
    let okButton = jQuery('#Button_OK');
    okButton.click();
    
    location.reload();
  }, 3000);
});


 
