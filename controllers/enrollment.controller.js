const Enrollment = require('../model/enrollment.model');
const Course = require('../model/course.model');
const User = require('../model/user.model');


exports.getAllEnrollment = async (req, res) => {
    try{
        const enrollments = await Enrollment.find();
        res.json(enrollments);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.getEnrollment = async (req,res) =>
{
    try
    {
     const enrollment = await Enrollment.findById(req.params.id);
     if(!enrollment)
     {
         return res.status(404).json({ message: 'Enrollment is not Found'});
     }
     res.json(enrollment);
    } 
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.createEnrollment = async(req, res) =>
{
    const enrollment = new Enrollment ({
        enrollmentDate: req.body.enrollmentDate
    });
    try
    {
        const savedEnrollment = await course.save();
        res.status(201).json(savedEnrollment);
    } 
    catch (error)
    {
          res.status(400).json({ message: error.message});
    }

};
exports.updateEnrollment = async (req, res) =>
{
    try
    {
        const enrollment = await Enrollment.findById(req.params.id);
        if(!enrollment)
        {
            return
            res.status(404).json({ message: 'Enrollment is not Found'});
        }
        enrollment.enrollmentDate = req.body.enrollmentDate;
        enrollment.status = req.body.status;

        const updatedEnrollment = await enrollment.save();
        res.json(updatedEnrollment);

    }    
    catch (error)
    {
        res.status(400).json({ message: error.message});
  
    }
};
exports.deleteEnrollment = async (req, res) =>
{
    try
    {
        const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
        if(!course)
        {
            return res.status(404).json({ message: 'Enrollment is not found'});
        }
        res.json({ message: 'Deleted Enrollment'});
    }
    catch (error)
    {
        res.status(500).json({ message: error.message})
    }
};