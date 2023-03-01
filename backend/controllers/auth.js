import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'

// Register

export const register = async(req, res){
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body

       
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}