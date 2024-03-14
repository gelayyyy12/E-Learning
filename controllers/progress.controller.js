const Progress = require('../model/progress.model');
const User = require('../model/user.model');
const Lesson = require('../model/lesson.model');


exports.getAllProgress = async (req, res) => {
    try{
        const progresses = await Progress.find();
        res.json(progresses);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.getProgress = async (req,res) =>
{
    try
    {
     const progress = await Progress.findById(req.params.id);
     if(!progress)
     {
         return res.status(404).json({ message: 'Progress is not Found'});
     }
     res.json(progress);
    } 
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.createProgress = async(req, res) =>
{
    const progress = new Progress ({
        score: req.body.score,
        dateOfResult: req.body.desciption,
        completedLessons: req.body.completedLessons

    });
    try
    {
        const savedProgress = await progress.save();
        res.status(201).json(savedProgress);
    } 
    catch (error)
    {
          res.status(400).json({ message: error.message});
    }

};
exports.updateProgress = async (req, res) =>
{
    try
    {
        const progress = await Progress.findById(req.params.id);
        if(!progress)
        {
            return
            res.status(404).json({ message: 'Progress is not Found'});
        }
        Progress.score = req.body.score;
        Progress.dateOfResult = req.body.dateOfResult;
        Progress.completedLessons = req.body.completedLessons;

        

        const updatedProgress = await progress.save();
        res.json(updatedProgress);

    }    
    catch (error)
    {
        res.status(400).json({ message: error.message});
  
    }
};
exports.deleteProgress = async (req, res) =>
{
    try
    {
        const progress = await Progress.findByIdAndDelete(req.params.id);
        if(!progress)
        {
            return res.status(404).json({ message: 'Progress is not found'});
        }
        res.json({ message: 'Progress deleted'});
    }
    catch (error)
    {
        res.status(500).json({ message: error.message})
    }
};