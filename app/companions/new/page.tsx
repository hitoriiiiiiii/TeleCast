import Companionform from "@/components/companionform";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const NewCompanion = async() => {
    const {userId} = await auth();
    if(!userId) redirect('/signin');

    return (
        <main className = "min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            <article className = "w-full gap-4 flex flex-col">
                <h1>Companion Builder</h1>
                <Companionform />
            </article>
        </main>
    );
}

export default NewCompanion;

