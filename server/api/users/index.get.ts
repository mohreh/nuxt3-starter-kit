import prisma from '~~/server/prisma';

export default () => {
  return prisma.user.findMany();
};
