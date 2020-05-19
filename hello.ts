import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const server = serve({ port: 3000 });

for await (const req of server) {
  console.log("incoming request");
  req.respond({ body: "MESSAGE FROM DENO\n" });
}

// let messsage: string;
// messsage = "hello im using deno";

// console.log(messsage);
