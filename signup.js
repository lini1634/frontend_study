$(document).ready(function() {
  $("#signupForm").submit(function(e) {
    e.preventDefault();

    var name     = $("#name").val();
    var password = $("#password").val();

    $.ajax({
      method: "POST",
      url: "http://localhost:5000/sign-up",
      data: JSON.stringify({
        "name"     : name,
        "password" : password,
      }),
      contentType: 'application/json'
    })
    .done(function(msg) {
       console.log(msg)
       if (msg.name === name) {
         window.location.href = './login.html';
       }
    });
  });
});