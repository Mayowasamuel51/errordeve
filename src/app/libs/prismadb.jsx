const { PrismaClient } = require('@prisma/client');

const globalForPrisma = globalThis;

const client = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = client;
}

export default client;



// import { PrismaClient } from '@prisma/client'

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


// // const client = globalThis.prisma || new PrismaClient();
// // if (process.env.NODE_ENV === "production") globalThis.prisma = client;

// export default client;




