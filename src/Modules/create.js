import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: "Curso de Lógica",
          description: "Fundamentos de Programação",
          duration: 120,
        },
      },
      module: {
        create: {
          name: "Módulo Básico",
          description: "Introdução aos Algoritmos",
        },
      },
    },
  });
  console.log("--- Registro N:N Criado ---", result);
}
main();