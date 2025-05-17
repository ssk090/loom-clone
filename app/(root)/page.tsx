import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title="All videos" subHeader='Public Library' />
      <h1 className='text-4xl font-karla'>Welcome to Loom Clone</h1>

      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  )
}

export default Page