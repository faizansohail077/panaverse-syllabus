
import { Box, Container } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import QuarterBox from './QuarterBox'
import { useSearchParams } from 'next/navigation';
import { Coursedata } from './courseData';
import { quarterDataType } from '@/app/type';
import CourseContent from './CourseContent';

import { Poppins } from '@next/font/google'

export const poppins = Poppins({
    variable: '--poppin-font',
    weight: ['800', '300', '400', '600']
})

const CourseOutline = ({ params }: { params: { id: string } }) => {
    const searchParams = useSearchParams()
    const [data, setData] = useState<React.SetStateAction<quarterDataType[] | any>>([])
    let page = searchParams.get('quarter');
    const { id } = params
    const contentRef = useRef<any>()

    const quarterBox = [
        { id: 0, slug: 'q1', text: 'Quarter 1' },
        { id: 1, slug: 'q2', text: 'Quarter 2' },
        { id: 2, slug: 'q3', text: 'Quarter 3' },
        { id: 3, slug: 'q4', text: 'Quarter 4' },
        { id: 4, slug: 'q5', text: 'Quarter 5' },
    ]

    useEffect(() => {
        filterData()
        contentRef.current.scrollTop = 0
    }, [page])

    const filterData = () => {
        if (!page) {
            page = 'q1'
        }
        const finddata = Coursedata.find(x => x.slug == id)
        const quarterData = finddata?.quarter.find(x => x.quarter == page)
        setData(quarterData)
    }

    return (
        <Box px={{ base: 6 }}  >
            <Container boxShadow={'md'} marginTop={{ base: 5, md: 10 }} maxW='container.xl' display={'flex'} height={'100%'} flexWrap={{ base: 'wrap', md: 'nowrap' }} justifyContent={'space-between'} className={poppins.className}>
                <Box display={'flex'} flexWrap={{ base: 'wrap', md: 'nowrap' }} width={'100%'} >

                    <Box width={{ base: '100%', md: 'auto' }} display={{ base: 'flex', md: 'inline' }} flexWrap={'wrap'} justifyContent={'space-evenly'} paddingBottom={10} >
                        {quarterBox.map((d, index) => {
                            return (<QuarterBox params={params} slug={d.slug} name={d.text} key={d.id} />)
                        })}
                    </Box>

                    <Box marginTop={10} width={'100%'}>
                        <CourseContent contentRef={contentRef} course={data?.course} tag={data?.tag} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default CourseOutline