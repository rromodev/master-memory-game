import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'wouter'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

const Header = () => {
  return (
    <Flex as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%">
      <Box ml={2} p="2">
      <Link href="/" style={{ cursor: "pointer"}} >
          Master Memory Game        
      </Link>
      
      </Box>
      
      <Spacer />
      <Flex align="flex-end" mr={2}>
          <Box p="2">
            <Link href="https://github.com/rromodev/master-memory-game" style={{ cursor: "pointer"}}> 
                About
            </Link>
          </Box>        
        <ColorModeSwitcher/>
      </Flex>
    </Flex>
  )
}

export default Header
