import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "COLE_O_ID_DA_TABELA_COURSES_MODULES_AQUI",
    },
  });
  console.log("--- Vínculo Removido ---", result);
}
main();