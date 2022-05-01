import prisma from '~~/server/prisma';

export default async (req: unknown) => {
  const body = await useBody(req);
  const user = await prisma.user.create({
    data: body,
  });
  return user;
};
