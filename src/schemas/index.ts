import { z } from "zod";

export const inputSchema = z.object({
    email: z.string().email('E-mail inválido, por favor corrija-o.'),
    password: z.string().min(3, 'Senha curta, por favor insira mais caracteres.')
  });
