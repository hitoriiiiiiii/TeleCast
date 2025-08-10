"use client"

import Companionform from "@/components/companionform"
import Image from "next/image"
import Link from "next/link"

const NewCompanion = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <Companionform />
      </article>
    </main>
  )
}

export default NewCompanion
