const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient()

module.exports = {
  register: async (data) => {
    const user = await Prisma.user.create({
      data: {
        user_name: data.username,
        user_password: data.pass,
        user_email: data.email,
        user_phone: data.phone,
        user_recovery: data.recovery,
        Personal: {
          create: {
            personal_fname: data.personal.fname,
            personal_lname: data.personal.lname,
            personal_age: data.personal.age,
            personal_profile: data.personal.avatar,
          }
        },
      }
    })

    return user
  },
  
  login: async (data) => {
    const user = Prisma.user.findFirst({
      where: {
        user_email: data.email,
        user_password: data.pass
      },
      select: {
        user_id: true,
        user_name: true,
        user_password: true,
      }
    })
    return user
  },
};