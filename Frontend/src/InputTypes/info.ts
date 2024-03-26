import z from"zod";

export const patInfo=z.object({
    mobile:z.string().min(10).max(10),
    age:z.number(),
    gender:z.string(),
    latitude:z.number(),
    longitude:z.number()
})

export type patInfotype=z.infer<typeof patInfo>;

export const doctorInfo=z.object({
    mobile:z.string().min(10).max(10),
    age:z.number().int(),
    gender:z.string(),
    latitude:z.number(),
    longitude:z.number(),
    specialization:z.string(),
    experience:z.string(),
    clinic:z.string(),
    fee:z.number(),
    clinic_days:z.array(z.string())

})
export type doctorInfotype=z.infer<typeof doctorInfo>;

export const doctorFullInfo=z.object({
    mobile:z.string().min(10).max(10),
    age:z.number().int(),
    gender:z.string(),
    latitude:z.number(),
    longitude:z.number(),
    specialization:z.string(),
    experience:z.string(),
    clinic:z.string(),
    fee:z.number(),
    clinic_days:z.array(z.string()),
    name:z.string(),
    email:z.string().email(),
    rating:z.number()
})
export type doctorFullInfotype=z.infer<typeof doctorFullInfo>;