const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// Update user info
router.put("/:id", async (req, res)=>{
    if(req.body.id === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id,
                {                
                    $set: req.body,
                }, {new: true}
            )
            res.status(200).json(updateUser);
        } catch (err) {
            res.status(400).json(err);
        }
    }
    else{
        res.status(401).json("you can only change your own account");
    }
})

// Delete
router.delete("/:id", async (req, res)=>{
    if(req.body.id === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({userName: user.userName});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has been deleted...");
            } catch (err) {
                res.status(400).json(err);
            }
        }catch(err){
            res.status(404).json("User not found!");
        }
    }
    else{
        res.status(401).json("you can only delete your own account");
    }
})


module.exports = router
