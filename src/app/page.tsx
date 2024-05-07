import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@mui/material'
import { Adsense } from '@/components/adsense'
import Content from './_components/Content'

export default function Home() {
  return (
    <Box>
      <Adsense
        className='adsbygoogle'
        style={{ display: 'block' }}
        client='ca-pub-9643912173816808'
        slot='1480448417'
        format='auto'
        responsive='true'
      ></Adsense>
      <Content />
    </Box>
  )
}
