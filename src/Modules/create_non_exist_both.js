import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: "Curso de ABC",
          description: "Curso completo de ABC",
          duration: 200,
        },
      },
      module: {
        create: {
          name: "Módulo A",
          description: "Módulo introdutório",
        },
      },
    },
  });

  console.log("--- Criado Curso e Módulo simultaneamente ---");
  console.log(result);
}

main();
