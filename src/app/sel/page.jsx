import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'

const projects = [
  {
    name: 'Establishing Trust and Connection',
    description:
      'Building trust and rapport between the coach and the child is foundational. We start each session with activities aimed at fostering a sense of safety and belonging, allowing the child to feel comfortable expressing themselves and engaging with others.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
  },
  {
    name: 'Setting Goals and Encouragement',
    description:
      'We involve the child in setting achievable goals for their swimming progress. By acknowledging their efforts and celebrating their successes, we promote a positive self-image and boost self-confidence, essential components of SEL.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'Emotional Regulation',
    description:
      'Teaching children techniques for managing emotions is crucial, especially in a dynamic environment like a swimming pool. We introduce calming techniques and coping strategies to help children navigate any anxieties or frustrations they may encounter during lessons.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Building Communication Skills',
    description:
      'Effective communication is key to social interaction. Through structured activities and games, we encourage children to communicate their needs, express themselves clearly, and listen attentively to others, fostering valuable social skills both in and out of the water.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'Promoting Collaboration and Teamwork',
    description:
      'Group activities and partner exercises provide opportunities for children to collaborate, cooperate, and support one another. Learning to work together towards a common goal enhances their sense of empathy, teamwork, and camaraderie.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Reflecting and Processing Experiences',
    description:
      'After each session, we take time to reflect on the experience together. Through open discussions and guided reflections, we help children identify their feelings, recognize their strengths, and learn from their experiences, promoting self-awareness and emotional intelligence.',
    link: { href: '#', label: 'github.com' },
    logo: logoStarbucks,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'SEL',
  description: 'How we weave SEL into swimming lessons with your child?',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="How we weave SEL into swimming lessons with your child?"
      intro="Weaving social-emotional learning (SEL) into swimming classes for children with special needs requires a thoughtful and intentional approach. Here's how we do it at Swim Tim."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {/* <Card.Link href={project.link.href}>{project.name}</Card.Link> */}
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              {/* <LinkIcon className="h-6 w-6 flex-none" /> */}
              {/* <span className="ml-2">{project.link.label}</span> */}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
