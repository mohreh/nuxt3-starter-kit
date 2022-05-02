import jwt from '~~/server/utils/jwt';
import prisma from '~~/server/utils/prisma';

export default defineEventHandler(
  async (req: IncomingMessage): Promise<User> => {
    const { token } = useQuery(req) as { token: string };

    if (token) {
      const { email } = jwt.verifyToken(token) as UserLogin;
      return await prisma.user.findUnique({ where: { email } });
    }
  },
);
