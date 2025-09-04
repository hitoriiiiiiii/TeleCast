import CompanionCard from "@/components/companioncard";
import CompanionsList from "@/components/companionslist";
import CTA from "@/components/CTA";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.action";
import { recentSessions, defaultCompanions , } from "../constants"; // <-- Add defaultCompanions to your constants
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();

  // Use default companions if user is not signed in
  const companions = user
    ? await getAllCompanions({ limit: 3 })
    : defaultCompanions;

  // Use real-time sessions only if user is signed in and has sessions, otherwise fallback to default
  const recentSessionsCompanions = user ? await getRecentSessions(user.id, 10) : [];
  const sessionsToShow =
    user && recentSessionsCompanions && recentSessionsCompanions.length > 0
      ? recentSessionsCompanions
      : recentSessions;

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={subjectsColors[companion.subject]}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={sessionsToShow}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;