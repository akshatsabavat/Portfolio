import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BoxReveal from "../magicui/box-reveal";

const TabTriggerUI: React.FC<{ workPlace: string; workLocation: string }> = ({
  workLocation,
  workPlace,
}) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-[17px]">{workPlace}</p>
      <p className="text-sm text-gray-500">{workLocation}</p>
    </div>
  );
};

const TabContentUI: React.FC<{
  workPlace: string;
  workLocation: string;
  position: string;
  duration: string;
  responsibilities: string[];
}> = ({ workPlace, workLocation, position, duration, responsibilities }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div>
        <BoxReveal boxColor={"#D3D3D3"} duration={0.5}>
          <p className="text-2xl font-medium">{position}</p>
        </BoxReveal>
        <BoxReveal boxColor={"#D3D3D3"} duration={0.5}>
          <p className="text-sm text-gray-500">{duration}</p>
        </BoxReveal>
      </div>
      <BoxReveal boxColor={"#D3D3D3"} duration={0.5}>
        <ul className="list-disc pl-6 space-y-2">
          {responsibilities.map((resp, index) => (
            <li key={index} className="text-sm">
              {resp}
            </li>
          ))}
        </ul>
      </BoxReveal>
    </div>
  );
};

const ExperienceTab = () => {
  return (
    <Tabs defaultValue="kap">
      <div className="flex gap-10">
        <TabsList>
          <TabsTrigger value="kap">
            <TabTriggerUI
              workPlace="Khudabadi Amil Panchayat"
              workLocation="Mumbai, MH, India"
            />
          </TabsTrigger>
          <TabsTrigger value="techly">
            <TabTriggerUI
              workPlace="Techly Assist"
              workLocation="Hyderabad, TS, India"
            />
          </TabsTrigger>
          <TabsTrigger value="newk">
            <TabTriggerUI workPlace="Newk" workLocation="Delhi, NCR, India" />
          </TabsTrigger>
          <TabsTrigger value="crypto">
            <TabTriggerUI
              workPlace="Crypto Capable"
              workLocation="Bangluru, KA, India"
            />
          </TabsTrigger>
        </TabsList>
        <div className="pt-1 flex-1">
          <TabsContent value="kap">
            <TabContentUI
              workPlace="Khudabadi Amil Panchayat"
              workLocation="Mumbai, MH, India"
              position="Software Engineer | Part time"
              duration="July 2023 – Sept 2024"
              responsibilities={[
                "Developed an entire online platform that hosts 2500+ amil sindhis in Mumbai and across the world to reach out, using Next.js, Typescript, Chakra UI, Contentful, TRPC, GraphQL, Jotai, Supabase, PostgresQL and Cloudflare",
                "Developed the platform's Blog and Events page, that is controlled and managed entirely by Contentful and GraphQL",
                "Developed a comprehensive application system facilitated with real time processing, where in users can create accounts and send membership and matrimony applications as well as donations, that is in turn reviewed by the community on a separate authenticated admin page",
                "Developed an emailing system to manage and automate informing users regarding, site updates, application status as well as payment confirmations",
              ]}
            />
          </TabsContent>
          <TabsContent value="techly">
            <TabContentUI
              workPlace="Techly Assist"
              workLocation="Hyderabad, TS, India"
              position="Fullstack Engineer Intern | Full time"
              duration="July 2023 – August 2023"
              responsibilities={[
                "Was assigned to work with the software engineering team to tend to two of the company's client's software needs",
                "Developed a client's emailing systems and server on a custom SMTP Server using Webmin, Digital Ocean and express.js in collaboration with the DevOps team, replacing Mailchimp. Achieving $120 annual savings and full control over email infrastructure",
                "Developed a security employee management software using TypeScript, Next.js, and Chakra UI, with tRPC for type-safe APIs under supervision of the software engineer team lead. Saving 15 hours per week in terms of timesheet and payroll processing and improved security shift coverage by 100%",
              ]}
            />
          </TabsContent>
          <TabsContent value="newk">
            <TabContentUI
              workPlace="Newk 3D Pvt Ltd"
              workLocation="Delhi NCR, UP, India"
              position="Frontend Engineer &amp; UI/UX Intern | Full time"
              duration="April 2023 – July 2023"
              responsibilities={[
                "Assisted in developing and designing a retailer dashboard using Figma, TypeScript, Next.js and Chakra UI. Enabled furniture store owners to manage and upload 3D models, increasing reach and sales by 25%.",
                "Collaborated with founders to design and develop the NEWK Landing page using Nuxt.js, Nuxt UI and Figma and the 3D Product view experience using Typescript, Next.js and Chakra UI as well as curate a brand identity for the company",
              ]}
            />
          </TabsContent>
          <TabsContent value="crypto">
            <TabContentUI
              workPlace="Crypto Capable"
              workLocation="Bengaluru, KA, India"
              position="Frontend Engineer &amp; UI/UX Intern | Full time"
              duration="Feb 2022 – April 2022"
              responsibilities={[
                "Designed and developed a SDK using Figma and Typescript for new NEAR blockchain users, streamlining user onboarding to the NEAR Platform.",
                "Worked in a team of 3 under the guidance of an engineering mentor. The SDK Reduced onboarding time by 67%, which decreased user churn rates by about 5%",
              ]}
            />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
};

export default ExperienceTab;
