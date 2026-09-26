import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const authors = await prisma.authors.findMany({
    include: {
      books: true,
    },
  });

  console.log("--- Autores e seus respectivos livros ---");
  console.log(JSON.stringify(authors, null, 2));
}

main();