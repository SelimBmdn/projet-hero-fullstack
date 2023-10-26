'use client'
import styles from './Searchbar.module.css'
import { Flex, Button, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { difficulties, muscles } from '@constants'
import { useRouter } from 'next/navigation'

const Searchbar = () => {

    function formatDifficulty(input: string) {
        return input.charAt(0).toUpperCase() + input.slice(1)
    }

    function formatMuscleName(input: string) {
        const words = input.split('_');
        const formatedWords = words.map(word => {
            const firstLetter = word.charAt(0).toUpperCase()
            const restOfWord = word.slice(1).replace(/_/, ' ')
            return firstLetter + restOfWord
        })
        return formatedWords.join(' ')
    }



    return (
        <div className={styles.searchbar} id="searchbar">

            <Flex
                justifyContent='center'
                alignItems='center'
                flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
            >
                <Select
                    placeholder='Difficulty'
                    width={['100%', '100%', '100%', '20%']}
                    mx=".5rem"
                    mb={['0.5rem', '0.5rem', '0.5rem', '0']}
                    bg='white'
                >
                    <option value="">None</option>
                    {difficulties.map(difficulty => (
                        <option value={difficulty}>{formatDifficulty(difficulty)}</option>
                    ))}
                </Select>

                <Select
                    placeholder='Muscle'
                    width={['100%', '100%', '100%', '20%']}
                    mx=".5rem"
                    mb={['0.5rem', '0.5rem', '0.5rem', '0']}
                    bg='white'
                >
                    <option value=''>None</option>

                    {muscles.map(muscle => (
                        <option value={muscle}>{formatMuscleName(muscle)}</option>
                    ))}
                </Select>

                <Button
                    mx="0.5rem"
                    width={['100%', '100%', '100%', '20%']}
                    colorScheme='messenger'
                >

                    Search
                </Button>

            </Flex>
        </div>
    )
}

export default Searchbar