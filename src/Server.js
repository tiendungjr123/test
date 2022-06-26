const express = require("express");
const cors = require("cors")
require('./db/config');
const User = require('./db/User');
const app = express();


app.use(express.json());
app.use(cors());

app.post("/signup",async (req,resp) =>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
})

app.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
}
)
app.listen(3000);