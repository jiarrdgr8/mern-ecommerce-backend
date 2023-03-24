import express from 'express'
import path from 'path'
import multer from 'multer'
import upload from '../multer'

Router.post('/create-user', upload.single('file'), (req, res) => {
    const { name, email, password } =req.body
    const userEmail = await user.findOne({email})

    if(userEmail) {
        return next(new ErrorHandle('User already exists', 400))
    }
    
})