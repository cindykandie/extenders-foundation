import { Inter } from 'next/font/google'
import MidsectionHome from '@/components/MidsectionHome'
import CustomHead from '@/components/CustomHead'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <CustomHead />
      <main className='mt-20'>
        <MidsectionHome />
      </main>
    </div>
  )
}
