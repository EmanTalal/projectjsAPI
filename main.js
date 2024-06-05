function validation() {
    let form = document.getElementById('#form');
    form.addEventListener('submit', function(event) {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        if (!username.match(/^[A-Z]/)) {
            alert('Must all Capital letters ');
            event.preventDefault();
        }
        if (password.length < 4) {
            alert('Must more than 4 length');
            event.preventDefault();
        }
        if (email.indexOf('@') <= 0) {
            alert('Must be Contain the @');
            event.preventDefault();
        } else {
            window.location.href = 'login.html';
        }
    });
}

function saveinDB() {
    fetch('https://6657373e9f970b3b36c869e6.mockapi.io/imge', {
            method: 'POST',
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
async function login() {
    let res = await fetch('https://6657373e9f970b3b36c869e6.mockapi.io/imge', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data = await res.json();
    if (data.password === password) {
        response.body = { username: username, message: `welcome ${username}` }
    };
}