const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { Schema } = require('mongoose');


mongoose.connect('mongodb://localhost:27017/books ').then(()=>{
    console.log("mongoDb is connected")
})


const bookData = new Schema({
    title: String,
    author: String,
    year: Number,
});

const Book = mongoose.model('Book', bookData)

app.use(express.json())

 app.post('/book',async(req,res)=>{
    const data = req.body
    const object = await Book.create(data)
    res.send({"message" :"book created successfully", object})
 })

 app.get('/search/:id',async(req,res)=>{
    const id = req.params.id
    const object = await Book.find({ _id: id})
    res.send({'Message':'object is found', object })
 })


 app.listen(9000,()=>{
    console.log("srever is connected")
 })

