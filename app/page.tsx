import CompanionCard from "@/components/companioncard";
import CompanionsList from "@/components/companionslist";
import CTA from "@/components/CTA";
import { recentSessions } from "../../constants";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.action";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
  const companions: any[] = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions: any[] = await getRecentSessions(10);

  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>

        <section className="home-section">
      <CompanionsList
        title="Recently completed sessions"
        companions={recentSessionsCompanions}
        className="w-2/3 max-lg:w-full"
      />
            <CTA />
        </section>
    </main>
  )
}

export default Page