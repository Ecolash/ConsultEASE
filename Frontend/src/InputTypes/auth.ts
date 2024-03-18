import z from "zod";


export const signupInput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string(),
    type:z.string()
})
export type Signuptype=z.infer<typeof signupInput>;

export const signinInput=z.object({
    email: z.string().email(),
    password:z.string().min(6),
})

export type Signintype=z.infer<typeof signinInput>;