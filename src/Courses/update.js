import { prisma } from "./prismaclient.js";

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "0a54e0e7-e6e8-46fb-8463-7e474e98e94f",
    },
    data: {
      duration: 300,
      name: "Curso de React Native v2",
      description: "Curso muito bom de React Native",
    },
  });

  console.log("--- Curso atualizado com sucesso ---");
  console.log(result);
}

main();