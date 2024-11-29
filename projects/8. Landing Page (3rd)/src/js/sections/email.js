// EmailJS
function sendMail() {
  (function(){
    emailjs.init({
      publicKey: "KyTH1he-ZP1x-qrwp",
    });
  })();

  var params = {
    from_name: document.getElementById("fullName").value,
    phone_number: document.getElementById("phone_number").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };

  var serviceID = "service_xa6yshb";
  var templateID = "template_9rbo4rm";

  emailjs.send(serviceID, templateID, params).then( (res) => {
    alert("Success! " + res.status);
  });
}