import { getAllCompanions } from "@/lib/actions/companion.action";
import CompanionCard from "@/components/companioncard";
import SearchInput from "@/components/searchinput";
import SubjectFilter from "@/components/subjectfilter";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const companions = await getAllCompanions({ subject, topic });

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            <section className="companions-grid">
                {companions.length === 0 ? (
                    <div className="text-center py-10 text-lg text-gray-500">
                        Oops! There are no companions.
                    </div>
                ) : (
                    companions.map((companion: any) => (
                        <CompanionCard
                            key={companion.id}
                            {...companion}
                        />
                    ))
                )}
            </section>
        </main>
    )
}

export default CompanionsLibrary