
const express = require("express");
const router = express.Router();
const path = require("path");

const blogs = require('../data/blogs');

router.get('/' , (req,res)=>{
    //  res.sendFile(path.join(__dirname ,"../views/index.html")); 
    res.render("home");
});

router.get('/blog' , (req,res)=>{
    // blogs.forEach(element => {
    //     console.log(element.title)
    // });

    // res.sendFile(path.join(__dirname ,"../views/blogHome.html")); 

    res.render("blogHome", {
        blogs: blogs
    });

});

router.get('/blogpost/:slug' , (req,res)=>{
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug;
    })
    console.log(myBlog)
    // res.sendFile(path.join(__dirname ,"../views/blogpage.html"));  

    res.render('blogPage' , {
        title: myBlog[0].title,
        content: myBlog[0].content
    })
});


module.exports =router ;