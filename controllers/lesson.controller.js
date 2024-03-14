const Lesson = require('../model/lesson.model');

exports.getAllLesson = async (req, res) => {
    try{
        const lessons = await Lesson.find();
        res.json(lessons);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.getLesson = async (req,res) =>
{
    try
    {
     const lesson = await Lesson.findById(req.params.id);
     if(!lesson)
     {
         return res.status(404).json({ message: 'Lesson is not Found'});
     }
     res.json(lesson);
    } 
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.createLesson = async(req, res) =>
{
    const lesson = new Lesson ({
        title: req.body.title,
        content: req.body.content,
        description: req.body.description

    });
    try
    {
        const savedLesson = await lesson.save();
        res.status(201).json(savedLesson);
    } 
    catch (error)
    {
          res.status(400).json({ message: error.message});
    }

};
exports.updateLesson = async (req, res) =>
{
    try
    {
        const lesson = await Lesson.findById(req.params.id);
        if(!lesson)
        {
            return
            res.status(404).json({ message: 'Lesson is not Found'});
        }
        Lesson.title = req.body.title;
        Lesson.content = req.body.content;
        Lesson.description = req.body.description;

        const updatedLesson = await lesson.save();
        res.json(updatedLesson);

    }    
    catch (error)
    {
        res.status(400).json({ message: error.message});
  
    }
};
exports.deleteLesson = async (req, res) =>
{
    try
    {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);
        if(!lesson)
        {
            return res.status(404).json({ message: 'Lesson is not found'});
        }
        res.json({ message: 'Lesson deleted'});
    }
    catch (error)
    {
        res.status(500).json({ message: error.message})
    }
};