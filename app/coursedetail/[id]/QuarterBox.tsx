import { Box } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Poppins } from '@next/font/google'

export const poppins = Poppins({
    variable: '--poppin-font',
    weight: ['800', '300', '400', '600']
})

const QuarterBox = ({ params, name, slug }: { params: { id: string }, name: string, slug: string }) => {
    const { id } = params
    const searchParams = useSearchParams()

    let page = searchParams.get('quarter');
    const navigate = useRouter()

    return (
        <Box onClick={() => navigate.push(`/coursedetail/${id}?quarter=${slug}`)} height={100} width={100} color={'white'} fontWeight={'600'} className={poppins.className} marginTop={10} bg={`${page === slug ? 'pink.600' : 'pink.300'}`} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={5} cursor={'pointer'} >
            {name}
        </Box>
    )
}

export default QuarterBox