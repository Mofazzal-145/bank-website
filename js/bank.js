document.getElementById('longin-button').addEventListener('click', function(){

    // get user email

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;



    // get user password

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'mofu@gmail.com' && userPassword == 'mofu'){
        window.location.href = 'banking.html';
    }
<p id="name">Programming Hero</p>


const nameOfOrganization = document.getElementById("name").value;
   
console.log(nameOfOrganization);

})