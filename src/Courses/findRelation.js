import { prisma } from "./prismaclient.js";

async function main() {
  const result = await prisma.courses.findMany({
    include: {
      teacher: true,
    },
  });

  console.log(JSON.stringify(result, null, 2));
}

main();