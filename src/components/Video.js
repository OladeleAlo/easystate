import React from 'react'

const Video = ({numb}) => {
  return (
    <section>
        <h1> {numb ? <h2>Can YOU</h2>: ""}</h1>
    </section>
  )
}

export default Video