"use client";

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";

export function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:""
    },
  });

    const [isPending, startTransition] = useTransition();
    const[errorMsg,seterrorMsg]=useState<string|undefined>("");
    const[successMsg,setsuccessMsg]=useState<string|undefined>("");

  const onSubmitFun=(values:z.infer<typeof RegisterSchema>)=>{
    startTransition(async ()=>{
        const response= await register(values);
        seterrorMsg(response.error);
        setsuccessMsg(response.success);
    })
  }

  return (
    <CardWrapper
      headerLabel="Create An Account"
      backButtonLabel="Already Have an Account? Login"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitFun)} className="space-y-6">
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Jay Shende"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="jayshende@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage></FormMessage>
                </FormItem>
              )}
            />
          </div>

          <FormError 
          message={errorMsg}
          />
          <FormSuccess
          message={successMsg}
          />

          <Button 
          type="submit"
          className="w-full"
            disabled={isPending}
          >
            Create An Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
