const express= require("express");

const db=require("../models");

const router = express.Router();

router.get("/api/books",(req,res)=>{
    db.Book.find(req.query).then(books=>{
        res.json(books);
    }).catch((err)=>{
        res.status(422).json(err)
    })
})