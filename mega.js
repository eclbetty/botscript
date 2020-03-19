
window.setTimeout(() => {

	try {
  let name = "Free5";
  let password = "Qwer123";
  let score = "5";
  let tel = "0";

  let nameField = document.querySelector("#txt_Name");
  let passwordField = document.querySelector("#txt_Password");
  let scoreField = document.querySelector("#txt_scoreNum");
  let telField = document.querySelector("#txt_Tel");
  
  console.log(nameField);

  nameField.value = name;
  passwordField.value = password;
  scoreField.value = score;
  telField.value = tel;

  window.setTimeout(() => {
    let okButton = document.querySelector("#Button_OK");
    okButton.click();
  
  }, 2000);
  
  
  window.setTimeout(() => {
    location.reload();
  }, 5000);
	} catch (e) {
		location.reload();
	}
	
	
}, 5000);
