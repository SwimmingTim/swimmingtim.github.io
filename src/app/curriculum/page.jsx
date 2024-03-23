import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" >
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Curriculum',
  description: 'Curriculum',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Curriculum"
      intro="At Swim Tim, we prioritize safety, individualized instruction, and positive reinforcement to create a nurturing learning environment where every child can thrive and succeed in mastering essential swimming skills."
    >
      <div className="space-y-20">
          <Tool title="1st Lesson">
          We begin by introducing ourselves to your child, ensuring they feel comfortable and at ease in their new aquatic environment. Additionally, we`&apos;`ll have a discussion with you to understand your child`&apos;`s unique needs, preferences, and goals. This initial conversation helps us tailor the lessons effectively to suit your child`&apos;`s individual requirements.
          </Tool>
          <Tool title="2nd Lesson">
          In the second lesson, our focus is on assessing your child`&apos;`s water confidence. Through gentle and encouraging guidance, we`&apos;`ll observe your child`&apos;`s comfort level in the water and adjust the lesson accordingly. This personalized approach ensures that your child feels supported and empowered as they embark on their swimming journey.
          </Tool>
          <Tool title="10th Lesson">
          By the 10th lesson, we aim for significant progress in your child`&apos;`s swimming skills. They will have developed the ability to tread water confidently and master the breaststroke technique, enabling them to swim continuously for an impressive distance of 50 meters. Our structured and progressive approach ensures steady advancement while fostering a sense of accomplishment and pride in your child`&apos;`s achievements.
          </Tool>
      </div>
    </SimpleLayout>
  )
}
