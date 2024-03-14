const User = require('../model/user.model');

exports.getUser = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.getUser = async (req,res) =>
{
    try
    {
     const user = await User.findById(req.params.id);
     if(!user)
     {
         return res.status(404).json({ message: 'User is not Found'});
     }
     res.json(user);
    } 
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.createUser = async(req, res) =>
{
    const user = new User ({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        userType: req.body.userType
    });
    try
    {
        const savedUser = await user.save();
        rs.status(201).json(savedUser);
    } catch (error)
    {
          res.status(400).json({ message: error.message});
    }

};
exports.updateUser = async (req, res) =>
{
    try
    {
        const user = await User.findById(req.params.id);
        if(!user)
        {
            return
            res.status(404).json({ message: 'User is not Found'});
        }
        user.userId = req.body.userId;
        user.title = req.body.title;
        user.description = req.body.description;
        user.userType = req.body.userType;

        const updatedStudent = await student.save();
        res.json(updatedStudent);

    }    
    catch (error)
    {
        res.status(400).json({ message: error.message});
  
    }
};
exports.deleteUser = async (req, res) =>
{
    try
    {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user)
        {
            return res.status(404).json({ message: 'User is not found'});
        }
        res.json({ message: 'User deleted'});
    }
    catch (error)
    {
        res.status(500).json({ message: error.message})
    }
};