import jwt from 'jsonwebtoken';

export default {
  signPayload: (payload: Record<string, unknown>) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP,
    });
  },
  verifyToken: (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};
