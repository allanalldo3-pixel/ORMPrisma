import { prisma } from "./prismaclient.js";

async function main() {
  const course = await prisma.courses.findUnique({
    where: {
      id: "0a54e0e7-e6e8-46fb-8463-7e474e98e94f",
    },
  });

  console.log("--- Curso encontrado pelo ID ---");
  console.log(course);
}

main();