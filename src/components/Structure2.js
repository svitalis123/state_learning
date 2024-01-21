import React from 'react'
import Section2 from './Section2'
import Heading2 from './Heading2'

function Structure2() {
  return (
    <Section2>
      <Heading2>
        Posts
      </Heading2>
      <Post
       title="Backing things up"
       content="if you want great life back yourself up"
      />
      <Allposts />
    </Section2>
  )
}

export default Structure2

const Allposts = () => {
  return (
    <Section2>
       <Heading2>
        All posts
      </Heading2>
      <RecentPosts />
    </Section2>   
  )
}

const RecentPosts = () => {
  return (
    <Section2>
      <Heading2>
        Recent Posts
      </Heading2>
      <Post
        title="heated things"
        content="heated things always appear"
      />
      <Post
        title="the way the truth and life"
        content="Seek that"
      />
    </Section2>
  )
}

const Post = ({title, content}) => {
  return (
    <Section2>
      <Heading2>
        {title}
      </Heading2>
      <p>
        content
      </p>
    </Section2>
  )
}