let button = document
  .getElementById("sendMessage")
  .addEventListener("click", (e) => {
    e.preventDefault();
    var headers = {
      "Content-Type": "application/json",
      "Access-Control-Origin": "*",
    };
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let puppyName = document.getElementById("puppy-name").value;
    // let breed = document.getElementById('breed').value;
    let message = document.getElementById("message").value;
    var data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      puppyName: puppyName,
      message: message,
      breed: "",
      senderEmail: "julesnematchou@gmail.com",
      senderPassword: "",
    };
    let loader = `	<button class="btn btn-info" style="border-radius: 0px;" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="sr-only">Sending...</span>
  </button>
  <button class="btn btn-info" style="border-radius: 0px;" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Sending Your Message
  </button>`;
    document.getElementById("loader").innerHTML = loader;
    fetch("https://5qzouijdge.execute-api.us-west-2.amazonaws.com/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("puppy-name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("message").value = "";
        document.getElementById("loader").innerHTML = "";
        swal(
          "Message Received",
          "Be Patient While We Process Your Request.",
          "success"
        );
      })
      .catch((err) => {
        alert(err);
        swal(
          "Failed",
          "There was an error sending you message please try again.",
          "error"
        );
        console.log(err);
      });
  });
