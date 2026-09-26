import { prisma } from "./prismaclient.js";

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de React Native",
      duration: 200,
      description: "Curso de Apps com React Native",
    },
  });

  console.log(result);
}

main();