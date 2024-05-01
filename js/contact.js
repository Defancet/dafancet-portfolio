document.addEventListener('DOMContentLoaded', function () {
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var subjectError = document.getElementById('subject-error');
    var messageError = document.getElementById('message-error');
    var submitError = document.getElementById('submit-error');

    function validateName() {
        var nameInput = document.getElementById('contact-name');
        var name = nameInput.value;

        if (name.length == 0) {
            nameError.innerHTML = "* What is your name?";
            nameInput.style.backgroundColor = "";
            return false;
        }
        nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
        nameInput.style.backgroundColor = "#e1ffe0";
        return true;
    }

    function validateEmail() {
        var emailInput = document.getElementById('contact-email');
        var email = emailInput.value;

        if(email.length == 0){
            emailError.innerHTML = "* What is your email?";
            emailInput.style.backgroundColor = "";
            return false;
        }

        if(!email.match( /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
            emailError.innerHTML = '* Please enter a valid email address.';
            emailInput.style.backgroundColor = "";
            return false;
        }

        emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
        emailInput.style.backgroundColor = "#e1ffe0";
        return true;
    }

    function validateSubject() {
        var subjectInput = document.getElementById('contact-subject');
        var subject = subjectInput.value;

        if(subject.length == 0){
            subjectError.innerHTML = "* What is the subject?";
            subjectInput.style.backgroundColor = "";
            return false;
        }

        subjectError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
        subjectInput.style.backgroundColor = "#e1ffe0";
        return true;
    }

    function validateMessage() {
        var messageInput = document.getElementById('contact-message');
        var message = messageInput.value;

        if(message.length == 0){
            messageError.innerHTML = "* Write a message.";
            messageInput.style.backgroundColor = "";
            return false;
        }
        messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
        messageInput.style.backgroundColor = "#e1ffe0";
        return true;
    }

    function validateForm() {
        let emailValid = validateEmail();
        let nameValid = validateName();
        let subjectValid = validateSubject();
        let messageValid = validateMessage();

        if(!emailValid || !nameValid || !subjectValid || !messageValid) {
            submitError.style.display = 'block';
            setTimeout(function(){submitError.style.display = 'none';}, 3000);
            return false;
        } else {
            submitForm();
            return true;
        }
    }

    function submitForm() {
        var messageSent = document.getElementById('message-sent');
        messageSent.style.display = 'block';
        setTimeout(function(){ messageSent.style.display = 'none'; }, 3000);
    }

    window.validateName = validateName;
    window.validateEmail = validateEmail;
    window.validateSubject = validateSubject;
    window.validateMessage = validateMessage;
    window.validateForm = validateForm;
    window.submitForm = submitForm;
});