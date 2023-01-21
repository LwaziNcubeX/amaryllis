import type { NextPage } from 'next'
import Head from 'next/head'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import {  Box } from '@chakra-ui/layout'
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button'

const Home: NextPage = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Head>
        <title>Amaryllis | Free Blog Template</title>
        <meta name="description" content="Dark mode using Next.js and Chakra UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
      <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        </IconButton>
      </Box>

      
    </Box>
  )
}

export default Home
