import jwt from '~~/server/utils/jwt';
import prisma from '~~/server/utils/prisma';

export default defineEventHandler(async (req: IncomingMessage) => {
  const cookies = useCookies(req);
  const { email } = jwt.verifyToken(cookies['access_token']) as UserLogin;
  return await prisma.user.findUnique({ where: { email } });
});
