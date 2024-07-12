const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/Usermodel');
const cors = require('cors')

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/your-database-name"; // replace 'your-database-name' with your actual database name

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.post('/create-user', async (req, res) => {
    const { username, secondname, lastname, iin, birthday, email } = req.body;

    try {
        const newUser = new User({
            username,
            secondname,
            lastname,
            iin,
            birthday,
            email
        });
        await newUser.save();
        res.status(201).send({ message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error creating user', error: err.message });
    }
});

app.get('/get-user', async (req, res) => {
    const { id } = req.query;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error fetching user', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
