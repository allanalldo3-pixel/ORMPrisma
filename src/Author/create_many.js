import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Machado de Assis",
      books: {
        createMany: {
          data: [
            { name: "Dom Casmurro" },
            { name: "Memórias Póstumas de Brás Cubas" },
          ],
        },
      },
    },
  });

  console.log("--- Autor e Livros criados com sucesso ---");
  console.log(result);
}

main();