import {z} from "zod";


// sign in
export const  useSignInSchema = ()=>{
    return z.object({
        email : z.string({required_error:'Email is required'}).email({message:"Please enter valid mail"}),
        password:z.string({required_error:"Password is required"}).min(5 , {message:'Password have min length 8 character'})
    })
};

export type SignInSchemaFields = z.infer<ReturnType<typeof useSignInSchema>>;


// register
export const useRegisterSchema = ()=>{
    return z.object({
      firstName: z
        .string({ message: "First name is required" })
        .min(1, { message: "First name must at least 4 character" }),
      lastName: z
        .string({ message: "Last name is required" })
        .min(1, { message: "Last name must at least 4 character" }),
      age: z.number({
        required_error: "Age is required",
        invalid_type_error: "Age must be a number",
      }),
    });
};

export type RegisterSchemaFields = z.infer<ReturnType<typeof useRegisterSchema>>