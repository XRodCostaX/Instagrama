import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

// generate user token

const generateToken = (id) =>
  jwt.sign({ id }, jwtSecret, {
    expiresIn: '7d',
  });

// register user and sign in

export const register = async (req, res) => {
  res.send('Registrado');
};
