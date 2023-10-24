"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  longUrl: z.string().url(),
});

export default function URLForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4"
      >
        <FormField
          control={form.control}
          name="longUrl"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormControl>
                <Input
                  className="w-full flex-1"
                  placeholder="https://...."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ShortMe Bruhh!</Button>
      </form>
    </Form>
  );
}
