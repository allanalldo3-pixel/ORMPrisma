import { prisma } from "./prismaclient.js";

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Prisma",
      duration: 50,
      description: "Curso sobre como utilizar ORM Prisma.js",
      teacher: {
        connect: {
          id: "COLE_AQUI_O_ID_DE_UM_PROFESSOR_SEM_CURSO",
        },
      },
    },
  });

  console.log(result);
}

main();