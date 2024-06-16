/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hPfRC7S7AA3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Chivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function Home() {
  return (
    <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr] gap-4 w-full max-w-6xl rounded-xl mx-auto">
      <aside className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="disease">
            <AccordionTrigger className="px-4 py-2 text-base">
              Disease
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2 px-4 py-2">
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Cancer
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Diabetes
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Heart Disease
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Alzheimer's
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Arthritis
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="phase">
            <AccordionTrigger className="px-4 py-2 text-base">
              Phase
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2 px-4 py-2">
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Phase 1
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Phase 2
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Phase 3
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Phase 4
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="location">
            <AccordionTrigger className="px-4 py-2 text-base">
              Location
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2 px-4 py-2">
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  New York
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Los Angeles
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Chicago
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Houston
                </Link>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  prefetch={false}
                >
                  Phoenix
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden">
        <div className="sticky top-0 p-4">
          <Input
            type="search"
            placeholder="Search trials..."
            className="w-full"
          />
        </div>
        <div className="p-4 grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Immunotherapy for Advanced Lung Cancer</CardTitle>
              <CardDescription>
                A Phase 3 trial evaluating a new immunotherapy drug for advanced
                non-small cell lung cancer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This trial is studying the effectiveness of a new immunotherapy
                drug in combination with standard chemotherapy for treating
                advanced non-small cell lung cancer.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Diabetes Prevention Study</CardTitle>
              <CardDescription>
                A Phase 2 trial evaluating a new drug for preventing type 2
                diabetes in high-risk individuals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This trial is studying the effectiveness of a new drug in
                preventing the development of type 2 diabetes in individuals
                with prediabetes or other risk factors.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/trial">
                <Button variant="outline">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Alzheimer's Disease Cognitive Enhancement Trial
              </CardTitle>
              <CardDescription>
                A Phase 3 trial evaluating a new drug for improving cognitive
                function in Alzheimer's disease patients.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This trial is studying the effectiveness of a new drug in
                improving cognitive function, memory, and daily living
                activities in patients with mild to moderate Alzheimer's
                disease.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}