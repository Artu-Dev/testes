function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  const userDatas = document.querySelector(".user-data");
  
  fullName.textContent = data.name;
  sub.textContent = data.sub;
  given_name.textContent = data.given_name;
  email.textContent = data.email;
  emailVerifield.textContent = data.email_verified;
  picture.setAttribute("src", data.picture);

  if(emailVerifield){
    userDatas.classList.remove('hide');
    picture.classList.remove('hide');
  }
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "253012729266-u5hac4744u3pv176d1a8oha2t1vkiou9.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { 
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      text: "continue_with.",
      logo_alignment: "left",
    }
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
}
