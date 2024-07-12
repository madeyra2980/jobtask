document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('exampleForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); 

        const formData = {
            username: document.getElementById('username').value,
            secondname: document.getElementById('secondname').value,
            lastname: document.getElementById('lastname').value,
            iin: document.getElementById('iin').value,
            birthday: document.getElementById('birthday').value,
            email: document.getElementById('email').value,
        };

        try {
            const response = await fetch('http://localhost:8080/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Пользователь успешно создан');
                console.log('Result:', result);
            } else {
                const error = await response.json();
                alert('Ошибка при создании пользователя: ' + error.message);
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Ошибка при создании пользователя');
        }
    });
});
