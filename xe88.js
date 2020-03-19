$(document).ready(function() {
  let name = "Free5";
  let password = "Qwer123";
  let score = "5";
  let tel = "0";

  let nameField = jQuery("#txtName");
  let passwordField = jQuery("#password");
  let scoreField = jQuery("#setscore");
  let telField = jQuery("#txtTel");

  nameField.val(name);
  passwordField.val(password);
  scoreField.val(score);
  telField.val(tel);

  window.setTimeout(() => {
    let okButton = jQuery("#Button_OK");
    okButton.click();
  
  }, 15000);
  
  
  window.setTimeout(() => {
   
    location.reload();
  }, 16000);
});
