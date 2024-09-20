import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//route to save a new book
router.post("/", async(req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(400).send({ message: "Provide All Required Fields title, author, publishYear" })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

//route to get all books
router.get("/", async(req,res)=>{
    try {
        const allBooks = await Book.find({});
        return res.status(200).json({ data: allBooks })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    } 
})

//route to get one book by id
router.get("/:id", async(req,res)=>{
    try {
        const { id } = req.params
        const book = await Book.findById(id);
        return res.status(200).json({ data: book })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    } 
})

//route to update a book
router.put("/:id", async(req,res)=>{
    try {
        const { id } = req.params
        const book = await Book.findByIdAndUpdate(id, req.body);
        if(!book){
            return res.status(404).json({ message: "Book Not Found" });
        }
        return res.status(200).json({ 
            message: "Book Updated Successfully",
            data: book })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    } 
})

//route to Delete a book
router.delete("/:id", async(req,res)=>{
    try {
        const { id } = req.params
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({ message: "Book Not Found" });
        }
        return res.status(200).json({ message: "Book Deleted Successfully" })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    } 
})

export default router;