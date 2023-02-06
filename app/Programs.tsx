import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import CardComponent from './Card'
import { ProgramData } from './data'
import styles from './page.module.css'


const Programms = () => {
  return (
    <Box marginTop={5}  >
      <Container  boxShadow={'md'} maxW='container.xl' display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={'center'} px={{ base: 6 }} paddingTop={{ base: 10, md: 20 }} paddingBottom={{ base: 10, md: 20 }}>
        <Heading className={styles.heading} >Programs We Offer</Heading>
        <Box marginTop={10} width={'100%'} display={'flex'} gap={5} flexWrap={{ base: 'wrap', md: 'nowrap' }} justifyContent={'space-between'} >
          {ProgramData.map((p) => {
            return (
              <CardComponent key={p.id} animation={p.animation} name={p.name} description={p.description} slug={p.slug} />
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default Programms