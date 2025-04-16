import { z } from "zod";

export const MainContactSchema = z.object({
  name: z.string().min(1, { message: "Campo requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(1, { message: "Teléfono requerido" }),
  date: z.string().min(1,{message: "Ingrese la fecha"}),
  dateTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
    message: "Ingrese la hora",
  }),
});
