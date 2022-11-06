const Post = require("../models/Post")

module.exports ={
    createPost: async (req, res) => {
      try {
        await Post.create({
            title: req.body.title,
            dictation: req.body.dictation,
        })
        console.log("post created")
        res.redirect("/")
    } catch (err){
          console.log(err)
      }
    }
}