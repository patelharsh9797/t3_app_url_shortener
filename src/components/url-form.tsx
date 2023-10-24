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
import { api } from "~/trpc/react";

const formSchema = z.object({
  longUrl: z.string().url({
    message: "Must be a valid URL Bro!!!",
  }),
});

export default function URLForm() {
  const { mutate: createShortUrl, isLoading } =
    api.url.createShortUrl.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async ({ longUrl }: z.infer<typeof formSchema>) => {
    await createShortUrl(
      { longUrl },
      {
        onSuccess: (data) => {
          alert(data?.shortUrl);
          form.reset({ longUrl: "" });
        },
      },
    );
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
            <FormItem className="w-full lg:w-1/2">
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
        <Button disabled={isLoading} type="submit">
          {isLoading ? "Shorting......" : "ShortMe Bruhh!"}
        </Button>
      </form>
    </Form>
  );
}
