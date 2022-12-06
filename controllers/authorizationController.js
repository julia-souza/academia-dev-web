import Aluno from "../models/Aluno.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    try {
        const aluno = await Aluno.findOne({ email: req.body.email });
        if (!aluno) {
            return next(createError(404, "Aluno não encontrado"));
        };
        const verifyPass = await bcrypt.compare(req.body.pass, aluno.pass);
        if (!verifyPass) {
            return next(createError(401, "Senha inválida."))
        }
        const { pass, ...payload } = aluno._doc;
        const accessToken = jwt.sign({ id: aluno._id, admin: aluno.ativo },
            process.env.JWT_SECRET, { expiresIn: "24h" });
        res.cookie("accessToken", accessToken,
            { httpOnly: true }).status(200).json(payload);

        res.status(200).json(payload);
    } catch (error) {
        next(error);
    }
};