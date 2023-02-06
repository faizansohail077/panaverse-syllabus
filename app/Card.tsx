import React from 'react'
import { Card, CardBody, CardFooter, Button, Heading, Stack, Text, Box } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CardComponent = ({ slug, animation, description, name }: { slug: string, animation: any, description: string, name: string }) => {
    const router = useRouter()
    return (
        <Card cursor={'pointer'} onClick={() => router.push(`coursedetail/${slug}`)} >
            <CardBody>
                <Box display={'flex'} height={{ base: 300, md: 100 }} alignItems={'center'} justifyContent={'center'} width={'100%'}
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
                <Stack mt='6' spacing='5'>
                    <Heading size='sm'>{name}</Heading>
                    <Text>
                        {description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Link href={`coursedetail/${slug}`} >
                    <Text textDecoration={'underline'} color={'blue.300'} >

                        Learn More
                    </Text>

                </Link>
            </CardFooter>
        </Card>
    )
}

export default CardComponent