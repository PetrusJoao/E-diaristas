import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import SafeEnvironment from 'UI/components/feedback/SaveEnvironment/SafeEnvironment';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
    </div>
  )
}
