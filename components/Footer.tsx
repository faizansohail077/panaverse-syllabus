import { Box, ButtonGroup, Container, IconButton, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => (

    <Box
        paddingTop={{ base: 5, md: 10 }}
        paddingBottom={{ base: 5, md: 10 }}
        marginTop={{ base: 5, md: 10 }}
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        px={{ base: 6 }} as="footer" role="contentinfo" py={{ base: '3' }}>
        <Container maxW='container.xl'>

            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center">
                    <Image src={require('@/assests/panaverse-logo.png')} alt={'logo'} height={100} width={100} />

                    <ButtonGroup variant="ghost">
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="1.25rem" />}
                        />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Twitter"
                            icon={<FaTwitter fontSize="1.25rem" />}
                        />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="subtle">
                    Certified Web 3.0 and Metaverse Developer A One Year and 4 Quarters Program
                </Text>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()}  All rights reserved.
                </Text>

            </Stack>
        </Container>
    </Box >
)