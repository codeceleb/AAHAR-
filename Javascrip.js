<script>
    // get form element
    var form = document.getElementById("foodDonationForm");

    // get input elements
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");
    var foodType = document.getElementById("foodType");
    var foodQuantity = document.getElementById("foodQuantity");

    // get error elements
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var messageError = document.getElementById("messageError");
    var foodTypeError = document.getElementById("foodTypeError");
    var foodQuantityError = document.getElementById("foodQuantityError");

    // get checkbox elements
    var pickup = document.getElementById("pickup");
    var delivery = document.getElementById("delivery");

    // form submit event
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // reset error messages
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        phoneError.innerHTML = "";
        messageError.innerHTML = "";
        foodTypeError.innerHTML = "";
        foodQuantityError.innerHTML = "";

        // validate form fields
        if (name.value == "") {
            nameError.innerHTML = "Please enter your name";
            name.focus();
            return;
        }
        if (email.value == "") {
            emailError.innerHTML = "Please enter your email";
            email.focus();
            return;
        }
        if (phone.value == "") {
            phoneError.innerHTML = "Please enter your phone number";
            phone.focus();
            return;
        }
        if (foodType.value == "") {
            foodTypeError.innerHTML = "Please select a food type";
            foodType.focus();
            return;
        }
        if (foodQuantity.value == "") {
            foodQuantityError.innerHTML = "Please enter food quantity";
            foodQuantity.focus();
            return;
        }
        if (message.value == "") {
            messageError.innerHTML = "Please enter your message";
            message.focus();
            return;
        }

        // check if pickup or delivery is selected
        if (!pickup.checked && !delivery.checked) {
            alert("Please select pickup or delivery option");
            return;
        }

        // form is valid, show success message
        alert("Form submitted successfully!");
    });
</script>
