import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "COLE_O_ID_DO_CURSO_AQUI", // Ex: "49c72d72-..."
      fk_id_module: "COLE_O_ID_DO_MODULO_AQUI", // Ex: "ddc0bf60-..."
    },
  });

  console.log("--- Vínculo criado com sucesso ---");
  console.log(result);
}

main();