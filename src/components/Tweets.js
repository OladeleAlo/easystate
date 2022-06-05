import React from 'react'
import Tweet from "./Tweet"

const Tweets = (props) => {
    const tweets = [
        {
            name:"Agoro",tweet:"How will the 2023 election be"
        },
        {
            name:"Labour Party",tweet:"Peter Obi is our flag bearer"
        },
        {
            name:"Youths",tweet:"We will create structure for Labour Party"
        },

]
  return (
      <section>
          <div> I have {tweets.length} tweets</div>
          <div>{tweets.map((tweet)=>(
              <Tweet name={tweet.name} tweet={tweet.tweet}/>
          ))}</div>
      </section>
    
  )
}

export default Tweets