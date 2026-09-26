import { prisma } from "./prismaclient.js";

async function main() {
  const result = await prisma.courses.delete({
    where: {
      id: "0a54e0e7-e6e8-46fb-8463-7e474e98e94f",
    },
  });

  console.log("--- Curso excluído com sucesso ---");
  console.log(result);
}

main();