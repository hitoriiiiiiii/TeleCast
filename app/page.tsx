import CompanionCard from "@/components/companioncard";
import CompanionsList from "@/components/companionslist";
import CTA from "@/components/CTA";
import Footer from "@/components/footer";
import { getAllCompanions, getUserSessions } from "@/lib/actions/companion.action";
import { recentSessions, defaultCompanions , } from "../constants"; // <-- Add defaultCompanions to your constants
import { currentUser } from "@clerk/nextjs/server";
import { subjectsColors } from "../constants";

const Page = async () => {
  const user = await currentUser();

  // Use default companions if user is not signed in
  const companions = user
    ? await getAllCompanions({ userId: user.id, limit: 3 })
    : defaultCompanions;

  // For sessions: show user-scoped sessions if signed in; otherwise show sample
  const recentSessionsCompanions = user ? await getUserSessions(user.id, 10) : [];
  const sessionsToShow = user ? (recentSessionsCompanions as any[]).flat() : recentSessions.map(session => ({
    id: session.id,
    name: session.name,
    topic: session.topic,
    subject: session.subject,
    duration: session.duration
  }));

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
      <Footer/>
    </main>
  );
};

export default Page;