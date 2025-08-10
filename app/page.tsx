import React from 'react'
import {Button} from '@/components/ui/button';
import CompanionCard from '@/components/companioncard';
import Companionslist from '@/components/companionslist';
import CTA from '@/components/CTA';
import { recentSessions } from '../constants';
const Page = () => {
  return (
    <main>
      <h1 className = "text-2xl underline "> Popular Companions</h1>
     <section className = "home-section">
      <CompanionCard
      id = "1"
      name = "Neuro the Brainly Explorer"
      topic = "Neural Netowrk of the Brain"
      subject = "science"
      duration={45}
      color= "#ffda6e"
      />
      <CompanionCard
       id = "2"
      name = "Countsy the Number Wizard"
      topic = "Derivatives & Integrals"
      subject = "maths"
      duration={45}
      color= "#fdda6e"
      />
      <CompanionCard
       id = "3"
      name = "Verba the Voculbary Builder"
      topic = "Language"
      subject = "english"
      duration={45}
      color= "#dfda6e"
      />
     </section>

     <section className = "home-section">
      <Companionslist
      title = "Recently completed sessions"
      companions={recentSessions}
      />
      <CTA/>
     </section>
    </main>
  )
}

export default Page