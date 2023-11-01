import Image from 'next/image'
import styles from './page.module.scss'
import HomePage from './dashboard/page'
import Header from './components/header/header'

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
