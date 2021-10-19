const User = require("../models/users");

exports.getUsers = (req, res) => {
    // Llamado a la base de datos
    User.find().then((userResult)=>{
        res.status(200).json(userResult);
    })

};

exports.addUsers = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        rol: req.body.rol
    });

    user.save().then((createdUser) => {
        res.status(201).json(createdUser);
    });
};

exports.getUserByEMail = (req, res) => {
    User.findOne({email:req.params.email}).then((userResult) => {
        if(userResult){
            res.status(200).json(userResult);
        } else {
            res.status(404).json(`Usuario no encontrado con el correo ${req.params.email}`);
        };
    });
};

exports.deleteUserByEMail = (req, res) => {
    User.deleteOne({email:req.params.email}).then((deletedUser) => {
        if(deletedUser.deletedCount === 1){
            res.status(200).json(`El usuario con el correo ${req.params.email} ha sido borrado`);
        } else {
            res.status(404).json(`Usuario no encontrado con el correo ${req.params.email}`);
        };
    })
};

exports.editUser = (req, res) => {
    const query = {email:req.params.email};
    User.findOneAndUpdate(query, {rol: req.body.rol}).then((updatedUser) => {
      if (updatedUser) {
        res
          .status(200)
          .json(`El usuario con el correo ${req.params.email} ha sido actualizado`);
      } else {
        res
          .status(404)
          .json(`Usuario no encontrado con el correo ${req.params.email}`);
      }
    });
  };