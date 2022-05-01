import jwt from '~~/server/utils/jwt';
import prisma from '~~/server/utils/prisma';

export default defineEventHandler(async (req: CompatibilityEvent) => {
  const { email, name } = (await useBody(req)) as UserLogin;

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
  }

  const accessToken = jwt.signPayload({
    email: user.email,
  });
  setCookie(req, 'access_token', accessToken, {
    secure: true,
  });
  return accessToken;
});
