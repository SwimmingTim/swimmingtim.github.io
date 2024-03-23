import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Motivation',
  description:
    'Why did I start?',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Why did I start?"
      intro="Ever since I had a neighbor with special needs, I felt a strong urge to understand and communicate with him better. This led me to join Pathlight as a teacher, where I delved into learning and discovering various teaching strategies. I actively contributed to refining lesson plans and innovating new approaches to cater to the diverse needs of my students. However, it was during meet-the-parents sessions that a recurring concern caught my attention - parents expressing worries about their children's sedentary lifestyles, often resorting to excessive screen time. This motivated me to make it my mission to engage students during PE lessons. To equip myself with the necessary skills and knowledge, I pursued a degree in sports and physical education with a minor focus on special needs. During this academic journey, I found inspiration to introduce swimming as a therapeutic activity for children with special needs, given its sensory benefits. This realization led me to establish Swim Tim, a platform dedicated to providing inclusive and enriching swimming experiences. Through Swim Tim, I am committed to fostering physical well-being and social-emotional growth in every child."
    >
      <div className="space-y-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">How do we engage child with PWDs? </h1>
          <Appearance
            title="1. Use Visual Supports"
            description="Visual aids such as pictures, schedules, or social stories can help clarify expectations and reduce anxiety."
          />
          <Appearance
            title="2.	Create Predictable Routines"
            description="Establishing a structured routine can provide a sense of security and predictability for the child. Use visual schedules to outline the sequence of activities."
          />
          <Appearance
            title="3.	Incorporate Special Interests"
            description="Many children with autism have specific interests. Incorporating these interests into activities can increase motivation and engagement."

          />
          <Appearance
            title="4.	Use Sensory Supports"
            description="Be mindful of sensory sensitivities and preferences. Adjust the environment to minimize sensory overload or discomfort, and provide sensory tools or accommodations as needed."
          />
          <Appearance
            title="5. Encourage Communication"
            description="Use techniques such as visual aids, gestures to support communication. Encourage the child to express their needs and preferences in whatever way works best for them."
          />
          <Appearance
            title="6.	Promote Calming Strategies"
            description="Teach the child techniques for self-regulation and coping with stress or sensory overload, such as deep breathing exercises, sensory breaks, or using fidget toys."
          />
          <Appearance
            title="7.	Provide Positive Reinforcement"
            description="Offer praise, rewards, or other forms of positive reinforcement to motivate and reinforce desired behaviors."

          />
          <Appearance
            title="8.	Model and Encourage Social Interaction"
            description="Demonstrate social interactions and encourage peer interactions in structured settings, such as group activities or games."
          />
          <Appearance
            title="9.	Collaborate with Parents"
            description="Work closely with parents, and caregivers to develop strategies that best support the child's individual needs and goals. "
          />
      </div>
    </SimpleLayout>
  )
}
