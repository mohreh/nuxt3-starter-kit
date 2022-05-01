import prisma from '~~/server/prisma';

export default async (req: unknown) => {
  const { email, name } = (await useBody(req)) as UserLogin;

  let user = await prisma.user.findUnique({ where: { email } });

  if (user) {
    return user;
  }

  user = await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  return user;
};
