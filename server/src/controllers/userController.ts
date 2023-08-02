import { Request, Response } from "express";
import bcrypt from "bcrypt"
const db = require("../db/models").default;

const createUser = async (req: Request, res: Response) => {
    try {
        const { name, username, password, email, birthDate, picture } = req.body;

        const foundUsername = await db.User.findOne({ where: { username } });
        if(foundUsername){
            return res.status(409).json({message: 'Nome de usuário já cadastrado'});
        }

        const foundEmail = await db.User.findOne({ where: { email } });
        if(foundEmail){
            return res.status(409).json({message: 'E-mail já cadastrado'});
        }

        const newUser = await db.User.create({
            name,
            username,
            email,
            birthDate,
            // Verifies if picture was sent before including it into 'user'
            ...(picture ? { picture } : {}),
        })

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.UserCredentials.create({
            userId: newUser.id,
            password: hashedPassword
        })

        return res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
}

export { createUser };