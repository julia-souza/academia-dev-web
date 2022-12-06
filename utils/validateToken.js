import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const validateToken = (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return next(
        createError(401, 'Você não está autenticado.'),
      );
    }
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.aluno = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
export const checkUser = (req, res, next) => {
  validateToken(req, res, () => {
    if (req.aluno.id === req.params.id || req.aluno.admin) {
      next();
    } else {
      {
        return next(createError(
          403,
          'Você não tem permissão para acessar este recurso.',
        ));
      }
    }
  });
};
