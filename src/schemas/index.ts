import { z } from "zod";

export const inputSchema = z.object({
    email: z.string().email('E-mail inválido, por favor corrija-o.'),
    password: z.string().min(3, 'Senha curta, por favor insira mais caracteres.'),
    search: z.string().min(3, 'Nome curto, por favor insira mais caracteres.')
});


export const searchSchema = z.object({
    search: z.string().min(3, 'Nome curto, por favor insira mais caracteres.')
});

export const profileSchema = z.object({
  firstName: z.string().min(3, 'Nome curto, por favor insira mais caracteres.'),
  lastName: z.string().min(1, 'Sobrenome curto, por favor insira mais caracteres.'),
  email: z.string().email('E-mail inválido, por favor corrija-o.'),
  address: z.string().min(7, 'Endereço curto, por favor insira mais caracteres.'),
});
