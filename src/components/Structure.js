import React from 'react'
import Section from './Section';
import Heading from './Heading';

function Structure() {
  return (
    <Section>
      <Heading>
        Title
      </Heading>
      <Section>
        <Heading>
          The Title
        </Heading>
        <Heading>
          The Title
        </Heading>
        <Section>
          <Heading>
            The sub Title
          </Heading>
          <Heading>
            The sub Title
          </Heading>
        </Section>
      </Section>
    </Section>
  )
}

export default Structure;