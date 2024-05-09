const userRouter = require("express").Router();
const user = require('../models/usuario')

userRouter.post('/', (req, res) =>{
    res
    .status(404)
    .json(
        {
            "message": "Hello World"
        }
    )
})

module.exports = userRouter;
