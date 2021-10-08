const User = require("../models/users");

exports.getUsers = (req, res) => {
    // Llamado a la base de datos
    User.find().then((postResult)=>{
        res.status(200).json(postResult);
    })

};

exports.addUsers = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        rol: req.body.rol,
        status: req.body.status
    });

    user.save().then((createdUser) => {
        res.status(201).json(createdUser);
    })
};