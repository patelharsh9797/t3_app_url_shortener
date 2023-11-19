"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, buttonVariants } from "~/components/ui/button";
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
  const router = useRouter();
  const [shortLink, setShortLink] = useState<{
    longUrl: string;
    shortUrl: string;
  } | null>(null);

  const ctx = api.useUtils();
  const { mutate: createShortUrl, isLoading } =
    api.url.createShortUrl.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = ({ longUrl }: z.infer<typeof formSchema>) => {
    setShortLink(null);

    createShortUrl(
      { longUrl },
      {
        onSuccess: (data) => {
          setShortLink({
            longUrl: data?.longUrl ?? "",
            shortUrl: data?.shortUrl ?? "",
          });
          form.reset({ longUrl: "" });
          // void ctx.url.getAllUrls.invalidate();
          void ctx.url.getAllUrls.invalidate();
          // revalidatePath("/");
        },
        onError: (error) => {
          console.log("error", error);
          alert("Something went wrong!");
        },
      },
    );
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="-mt-8 flex flex-col items-center justify-center gap-4"
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

      {shortLink && (
        <div className="mx-auto my-4 inline-block rounded-md bg-muted bg-opacity-30 px-4 py-4 bg-blend-saturation  ring-1 ring-secondary backdrop-blur-lg md:px-8">
          <span className="flex items-center justify-center gap-4">
            <span className="pl-4">
              <LinkIcon
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                  className: "h-4 w-4",
                })}
              />
            </span>
            <Link
              href={shortLink.shortUrl}
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium text-primary underline-offset-4 ring-offset-background transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {shortLink.shortUrl}
            </Link>
          </span>
        </div>
      )}
    </>
  );
}
