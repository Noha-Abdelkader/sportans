import React from "react";

// component
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInSchemaFields, useSignInSchema } from "@/lib/schemes/auth.schema";

// icon
import { FaBasketball } from "react-icons/fa6";

// hook form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { catchError } from "@/lib/utils/catch-error";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";


export default function LoginForm() {
// hooks
const searchParams = useSearchParams();



  // form
  const form = useForm<SignInSchemaFields>({
    resolver: zodResolver(useSignInSchema()),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInSchemaFields) {
   
    console.log(values);
// return;
    const response = await signIn("credential", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: decodeURIComponent(searchParams.get("callbackUrl") || "/"),
    });
    // if(response)
    console.log(response , 'foormmm')

  }

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="  relative z-10">
            <FaBasketball className="text-9xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-gray-100 z-0" />
            <div className="relative z-10 space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ex:mail@mail.com" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">Email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Password
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="mx-auto mt-5">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
  );
}
