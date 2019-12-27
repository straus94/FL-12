let password, checkPassword, newPassword;
let mail = prompt('enter login');
let userPass = 'UserPass';
let adminPass = 'AdminPass';
let cancel = 'Canceled';
let goodLengthPassword = 6;
let goodLengthMail = 5;
console.log(mail);
if (mail === '' || mail === null) {
    alert(cancel);
} else if (mail.length < goodLengthMail) {
        alert(`I don't know any emails having name length less than 5 symbols`);
} else if (mail === 'user@gmail.com') {
        password = prompt('enter password');

        if (password === '' || password === null) {
            alert(cancel);
        } else if (password === userPass) {
            if (confirm('Do you want to change your password?')) {
                checkPassword = prompt('write the old password');
                if (checkPassword === '' || checkPassword === null) {
                    alert(cancel);
                } else if (checkPassword === userPass) {
                    newPassword = prompt('enter new password');
                    if (newPassword === '' || newPassword === null) {
                        alert(cancel);
                    } else if (newPassword.length < goodLengthPassword) {
                        alert(`It’s too short password. Sorry.`);
                    } else {
                        if (prompt('again password') === newPassword) {
                            alert(`You have successfully changed your password.`);
                        } else {
                            alert(`You wrote the wrong password.`);
                        }
                    }
                }
            } else {
                alert('You have failed the change');
            }
        } else {
            alert('Wrong password');
        }
} else if (mail === 'admin@gmail.com') {
    password = prompt('enter password');

    if (password === '' || password === null) {
        alert(cancel);
    } else if (password === adminPass) {
        if (confirm('Do you want to change your password?')) {
            checkPassword = prompt('write the old password');
            if (checkPassword === '' || checkPassword === null) {
                alert(cancel);
            } else if (checkPassword === adminPass) {
                newPassword = prompt('enter new password');
                if (newPassword === '' || newPassword === null) {
                    alert(cancel);
                } else if (newPassword.length < goodLengthPassword) {
                    alert(`It’s too short password. Sorry.`);
                } else {
                    if (prompt('again password') === newPassword) {
                        alert(`You have successfully changed your password.`);
                    } else {
                        alert(`You wrote the wrong password.`);
                    }
                }
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert(`I don’t know you`);
}