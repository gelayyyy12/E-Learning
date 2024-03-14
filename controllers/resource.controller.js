const Resource = require('../model/resource.model');
const Lesson = require('../model/lesson.model');


exports.getAllResource = async (req, res) => {
    try{
        const resources = await Resource.find();
        res.json(resources);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.getResource = async (req,res) =>
{
    try
    {
     const resource = await Resource.findById(req.params.id);
     if(!resource)
     {
         return res.status(404).json({ message: 'Resource is not Found'});
     }
     res.json(resource);
    } 
    catch (error)
    {
        res.status(500).json({ message: error.message});
    }
};

exports.createResource = async(req, res) =>
{
    const resource = new Resource ({
        lesson_Id: req.body.lessonId,
        type: req.body.type


    });
    try
    {
        const savedResourcez = await b.save();
        res.status(201).json(savedResource);
    } 
    catch (error)
    {
          res.status(400).json({ message: error.message});
    }

};
exports.updateResource = async (req, res) =>
{
    try
    {
        const resource = await Resource.findById(req.params.id);
        if(!resource)
        {
            return
            res.status(404).json({ message: 'Resource is not Found'});
        }
        Resource.question = req.body.question;
        Resource.answer = req.body.answer;

        const updatedResource = await resource.save();
        res.json(updatedResource);

    }    
    catch (error)
    {
        res.status(400).json({ message: error.message});
  
    }
};
exports.deleteResource = async (req, res) =>
{
    try
    {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if(!resource)
        {
            return res.status(404).json({ message: 'Resource is not found'});
        }
        res.json({ message: 'Resource deleted'});
    }
    catch (error)
    {
        res.status(500).json({ message: error.message})
    }
};