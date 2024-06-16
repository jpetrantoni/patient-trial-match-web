
import { Button } from "@/components/ui/button"

interface ClinicalTrialProps {
  title: string;
  description: string;
  trialPhase: string;
  enrollmentStatus: string;
  duration: string;
  studyOverview: string[];
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  locationsDescription: string;
  principalInvestigator: {
    name: string;
    institution: string;
    address: string;
    email: string;
  };
  studyCoordinator: {
    name: string;
    institution: string;
    address: string;
    email: string;
  };
}

export function mapStudyToClinicalTrialProps(study: any): ClinicalTrialProps {
  return {
    title: study.protocolSection.identificationModule.officialTitle,
    description: study.descriptionModule.briefSummary,
    trialPhase: "Phase not available", // Since 'phases' is 'NA' in the data
    enrollmentStatus: study.protocolSection.statusModule.overallStatus,
    duration: `Start: ${study.protocolSection.statusModule.startDateStruct.date} - Estimated End: ${study.protocolSection.statusModule.completionDateStruct.date}`,
    studyOverview: [study.descriptionModule.detailedDescription],
    inclusionCriteria: study.eligibilityModule.eligibilityCriteria
      .split("\n")
      .filter((c: string) => c.startsWith("*"))
      .map((c: string) => c.substring(1).trim()),
    exclusionCriteria: study.eligibilityModule.eligibilityCriteria
      .split("\n")
      .filter((c: string) => c.startsWith("*"))
      .map((c: string) => c.substring(1).trim()),
    locationsDescription: `The study is conducted at ${study.contactsLocationsModule.locations[0].facility.city}, ${study.contactsLocationsModule.locations[0].facility.state}, ${study.contactsLocationsModule.locations[0].facility.country}.`,
    principalInvestigator: {
      name: study.protocolSection.sponsorCollaboratorsModule.responsibleParty
        .investigatorFullName,
      institution:
        study.protocolSection.sponsorCollaboratorsModule.responsibleParty
          .investigatorAffiliation,
      address: "Address not available", // Address is not provided in the data
      email: study.contactsLocationsModule.centralContacts[0].email,
    },
    studyCoordinator: {
      name: study.contactsLocationsModule.overallOfficials[0].name,
      institution:
        study.contactsLocationsModule.overallOfficials[0].affiliation,
      address: "Address not available", // Address is not provided in the data
      email: "Email not available", // Email is not provided for the study coordinator
    },
  };
}

export function ClinicalTrial({
  title,
  description,
  trialPhase,
  enrollmentStatus,
  duration,
  studyOverview,
  inclusionCriteria,
  exclusionCriteria,
  locationsDescription,
  principalInvestigator,
  studyCoordinator,
}: ClinicalTrialProps) {
  return (
    <div className="space-y-8">
      <section className="bg-gray-900 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-50 sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <div className="rounded-md bg-gray-800 px-4 py-2 text-gray-200">
                <span className="font-semibold">Trial Phase:</span> {trialPhase}
              </div>
              <div className="rounded-md bg-gray-800 px-4 py-2 text-gray-200">
                <span className="font-semibold">Enrollment:</span> {enrollmentStatus}
              </div>
              <div className="rounded-md bg-gray-800 px-4 py-2 text-gray-200">
                <span className="font-semibold">Duration:</span> {duration}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter">Study Overview</h2>
        {studyOverview.map((paragraph, index) => (
          <p key={index} className="mt-4 text-gray-600">
            {paragraph}
          </p>
        ))}
      </section>
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter">Eligibility Criteria</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Inclusion Criteria</h3>
            <ul className="mt-2 list-disc pl-4 text-gray-600">
              {inclusionCriteria.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Exclusion Criteria</h3>
            <ul className="mt-2 list-disc pl-4 text-gray-600">
              {exclusionCriteria.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter">Locations</h2>
        <p className="mt-4 text-gray-600">
          {locationsDescription}
        </p>
        <div className="mt-6">
          <Button>Find a Location</Button>
        </div>
      </section>
      <section className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Principal Investigator</h3>
            <p className="mt-2 text-gray-600">
              {principalInvestigator.name}
              <br />
              {principalInvestigator.institution}
              <br />
              {principalInvestigator.address}
              <br />
              <a href={`mailto:${principalInvestigator.email}`} className="text-blue-600 hover:underline">
                {principalInvestigator.email}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Study Coordinator</h3>
            <p className="mt-2 text-gray-600">
              {studyCoordinator.name}
              <br />
              {studyCoordinator.institution}
              <br />
              {studyCoordinator.address}
              <br />
              <a href={`mailto:${studyCoordinator.email}`} className="text-blue-600 hover:underline">
                {studyCoordinator.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
