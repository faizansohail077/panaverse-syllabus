"use client"
import { Footer, Navbar } from '@/components'
import './globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Inter, Poppins } from '@next/font/google'

export const poppins = Poppins({
  variable: '--poppin-font',
  weight: ['800','300',  '400', '600']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>

                
          <Navbar  />
          {/* <Box px={{ base: 6 }}> */}
            {children}
          {/* </Box> */}
          <Footer />
        </ChakraProvider>
      </body>
    </html >
  )
}
