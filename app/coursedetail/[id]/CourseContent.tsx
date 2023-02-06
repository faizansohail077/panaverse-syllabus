import { quarterDataType } from '@/app/type'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

interface Data {
    title: string;
    learning: ({
        title: string;
        link?: string;
    })[]
}

const CourseContent = ({ contentRef, tag, course }: { contentRef: React.LegacyRef<HTMLDivElement>, tag: string, course: Data[] }) => {
    return (
        <Box ref={contentRef} marginLeft={2} padding={2} width={'100%'} height={{ base: 'auto', md: '650px' }} overflow={'scroll'} >
            <Heading fontSize={'xl'} textAlign={'center'} marginBottom={2} >{tag}</Heading >
            <Box>
                {course?.map((c, index) => {
                    return (
                        <Box marginBottom={2} >
                            <Flex textDecoration={'underline'} marginBottom={4} alignItems={'center'} >
                                <Heading fontSize={'md'} >{index + 1}</Heading>
                                <Heading fontSize={'md'} paddingLeft={2} >{c.title}</Heading>
                            </Flex>
                            {c?.learning?.map((item) => {
                                return (
                                    <Box marginBottom={2}>
                                        <Text >{item?.title}</Text>
                                        <Link style={{ fontSize: '14px', textDecoration: 'underline', color: 'rgba(0,0,255,0.3)' }} href={`${item?.link}`}> {item?.link} </Link>
                                    </Box>
                                )
                            })}
                        </Box>

                    )
                })}
            </Box>
        </Box>
    )
}

export default CourseContent