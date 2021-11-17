const { PrismaClient } = require('@prisma/client');

const Prisma = new PrismaClient();

module.exports = {
  me: async (id) => {
    const user = Prisma.user.findUnique({
      where: {
        user_id: id,
      },
      select: {
        user_id: true,
        user_name: true,
        user_phone: true,
        user_recovery: true,
        user_email: true,
        Personal: true,
        Bank: false,
        Card: false,
      },
    });

    return user;
  },
};
