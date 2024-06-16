"use client";

import React, { useState } from 'react';
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
import { searchStudies,  } from "@/app/trial/actions";

interface Trial {
  id: string;
  nct_id: string; // Ensure this is included to use as a query parameter
  title: string;
  description: string;
  brief_summary: string;
}

interface TrialCardInfo {
  title: string;
  description: string;
  nct_id: string; // Include this in the TrialCardInfo interface
}

function TrialCard({ trial }: { trial: TrialCardInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{trial.title}</CardTitle>
        <CardDescription>{trial.description}</CardDescription>
        <Link href={`/trial?nct_id=${trial.nct_id}`} passHref>
          <Button className='w-1/3 bg-white' variant="outline">View Trial</Button>
        </Link>
      </CardHeader>
    </Card>
  );
}

function mapTrialsToCards(trials: any[]): TrialCardInfo[] {
  return trials.map(trial => ({
    title: trial.protocolSection.identificationModule.briefTitle,
    description: trial.protocolSection.descriptionModule.briefSummary,
    nct_id: trial.protocolSection.identificationModule.nctId, // Map the nct_id here
  }));
}

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [trials, setTrials] = useState<TrialCardInfo[]>([]);

  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      try {
        const data = await searchStudies(searchTerm);
        console.log(data);
        const trials = mapTrialsToCards(data);
        setTrials(trials);
      } catch (error) {
        console.error("Error fetching trials:", error);
      }
    }
  };

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        {trials.length > 0 ? (
          <div className="p-4 grid gap-4">
            {trials.map((trial: TrialCardInfo) => (
              <TrialCard key={trial.title} trial={trial} />
            ))}
          </div>
        ) : (
          <div className="p-4">Start by searching for a trial</div>
        )}
      </div>
    </div>
  );
}
