"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { searchStudies } from './actions';
import { ClinicalTrial, mapStudyToClinicalTrialProps, ClinicalTrialProps } from '@/components/clinical-trial';

export default function TrialPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nct_id = searchParams.get('nct_id');
  const [trialDetails, setTrialDetails] = useState<ClinicalTrialProps | null>(null);

  useEffect(() => {
    if (nct_id) {
      fetchTrialDetails(nct_id);
    }
  }, [nct_id]);

  const fetchTrialDetails = async (id: string) => {
    try {
      const data = await searchStudies(undefined, [id]);
      if (data.length > 0) {
        setTrialDetails(mapStudyToClinicalTrialProps(data[0]));
      }
    } catch (error) {
      console.error('Error fetching trial details:', error);
    }
  };

  return (
    <div>
      {trialDetails ? (
        <ClinicalTrial {...trialDetails} />
      ) : (
        <p>Loading trial details...</p>
      )}
    </div>
  );
}
