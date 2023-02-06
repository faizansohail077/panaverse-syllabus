"use client"
import React from 'react'
import styles from './page.module.css'
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { poppins } from './layout'
import animation from '@/assests/animation.json'
import Lottie from 'react-lottie'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
};

const Hero = () => {
    return (
        <Box px={{ base: 6 }} boxShadow={'md'}>
            <Container maxW='container.xl' display={'flex'} height={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} justifyContent={'space-between'} className={poppins.className}>
                <Box display={'flex'} alignItems={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} justifyContent={'center'} gap={10} flexDirection={'column'} marginTop={{ base: 5, md: 0 }} height={{ md: 500 }} width={'100%'}  >

                    <Heading className={styles.heading} >Certified Web 3.0 and Metaverse Developer</Heading>
                    <Text className={styles.text}   >Getting Ready for the Next Generation of the Internet
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
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
                        options={defaultOptions}
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