import React from 'react'
import Section3 from './Section3';
import Heading3 from './Heading3';

function Structure3() {
  return (
    <Section3>
      <Heading3>
        Human resources blogs
      </Heading3>
      <Allposts />
    </Section3>
  )
}

function Allposts(){
  return (
    <Section3>
      <Popular />
      <Latest />
      <Blogs />
    </Section3>
  )
}

function Popular(){
  return(
    <Section3>
      <Heading3>
        Popular
      </Heading3>
      <Post
      title= "Why Upskill or Reskill Yourself?"
      content="To fellow young professionals"
      />
    </Section3>
  )
}

function Latest(){
  return(
    <Section3>
      <Heading3>
        Latest
      </Heading3>
      <Post
      title= "New NSSF Rates 2024"
      content="The Act directed a 6% increase in NSSF monthly contribution per employees"
      />
    </Section3>
  )
}

function Blogs(){
  return(
    <Section3>
      <Post
      title= "Top 6 benefits of Payroll Outsourcing for Small Businesses"
      content="In the dynamic landscape of small businesses, the decision to outsource payroll can be a game-changer."
      />
    </Section3>
  )
}

function Post({title, content}){
  return(
    <Section3>
      <Heading3>
        {title}
      </Heading3>
      <p>
        {content}
      </p>
    </Section3>
  )
}
export default Structure3;