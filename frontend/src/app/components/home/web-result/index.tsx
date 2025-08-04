'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

function WebResult() {
  const [data, setData] = useState<any>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setData(data?.WebResultTagList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id='aboutus'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col  lg:gap-16 gap-5'>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
