"use client";
import Link from "next/link";
import { api } from "~/trpc/react";
import { RouterOutputs } from "~/trpc/shared";
import { buttonVariants } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type RecentShortUrlsProps = {
  initialUrls: RouterOutputs["url"]["getAllUrls"];
};
export default function RecentShortUrls({ initialUrls }: RecentShortUrlsProps) {
  const { data: allShortUrls } = api.url.getAllUrls.useQuery(undefined, {
    initialData: initialUrls,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return (
    <div className="space-y-4">
      <h4 className="text-2xl font-semibold">Most Recent Shorty's :</h4>

      <div className="mx-auto w-full md:w-1/2">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="p-2 text-center">No</TableHead>
                <TableHead className="p-2 text-center">Short Url</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allShortUrls.map((url, index) => (
                <TableRow key={`shorty-${url.id}`}>
                  <TableCell className="p-2">{index + 1}</TableCell>
                  <TableCell className="p-2">
                    <Link
                      href={"/"}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                    >
                      {url.shortUrl}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-col"></div>
    </div>
  );
}
