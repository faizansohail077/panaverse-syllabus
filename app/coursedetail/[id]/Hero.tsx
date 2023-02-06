"use client"
import React from 'react'
import styles from './page.module.css'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import Lottie from 'react-lottie'

import { Poppins } from '@next/font/google'

export const poppins = Poppins({
    variable: '--poppin-font',
    weight: ['800', '300', '400', '600']
})


const Hero = ({ name, description, animation }: { name: string| undefined, description: string| undefined, animation: any }) => {
    return (
        <Box px={{ base: 6 }}  >
            <Container boxShadow={'md'} marginTop={{base:5,md:10}} maxW='container.xl' display={'flex'} height={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} justifyContent={'space-between'} className={poppins.className}>
                <Box display={'flex'} alignItems={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} justifyContent={'center'} gap={10} flexDirection={'column'} marginTop={{ base: 5, md: 0 }} height={{ md: 500 }} width={'100%'}  >

                    <Heading className={styles.heading} >{name}</Heading>
                    <Text className={styles.text}   >
                        {description}
                    </Text>

                    <Button
                        as={'a'}
                        display={{ base: 'inline-flex' }}
                        fontSize={'sm'}
                        width={'30%'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}>
                        Apply
                    </Button>

                </Box>

                <Box display={'flex'} height={{ base: 300, md: 500 }} alignItems={'center'} justifyContent={'center'} width={'100%'}
                >
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: animation,
                        }}
                        height={'100%'}
                        width={'100%'}
                        style={{ objectFit: 'contain' }}
                    />

                </Box>
            </Container>
        </Box>
    )
}

export default Hero