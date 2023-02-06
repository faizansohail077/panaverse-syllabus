"use client"
import { ProgramData } from '@/app/data'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Hero from './Hero'
import styles from './page.module.css'

const getData = (slug: string) => {
  const data = ProgramData.find((x) => x.slug == slug)
  return data
}

const Courses = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const { id } = params
  const data = getData(id)

  useEffect(() => {
    if (data === undefined) return router.push('/')
    return () => { }
  }, [data])

  return (
    <div className={styles.main} >
      <Box>
        <Hero name={data?.name} description={data?.description} animation={data?.animation} />
      </Box>
    </div>
  )
}

export default Courses