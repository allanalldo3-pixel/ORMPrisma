import { prisma } from "./prismaclient.js";

async function main() {
  const courses = await prisma.courses.findMany();
  console.log("--- Lista de todos os cursos ---");
  console.log(courses);
}

main();
