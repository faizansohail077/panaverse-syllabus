import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './page.module.css'

const Objective = () => {
    return (
        <Box marginTop={5} boxShadow={'md'} >
            <Container maxWidth={{ base: '100%', md: '90%' }}  display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={'center'} px={{ base: 6 }} paddingTop={{ base: 10, md: 20 }} paddingBottom={{ base: 10, md: 20 }}>
                <Heading className={styles.heading} >The Program in a Nutshell: Earn While You Learn</Heading>
                <Text w={{ base: '100%', md: '70%' }} paddingTop={5} className={styles.text}>
                    In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project
                </Text>
            </Container>
        </Box>
    )
}

export default Objective