"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { PrimaryInput } from './components/primary-input'
import { useState } from 'react';
import { ButtonPrimary } from './components/primary-input/button-primary';

export default function Home() {
  const [search, setSearch] = useState ("");

  const handleChange = (value:string) => {
    setSearch(value)
  }

  return (
    <main className={styles.main}>
     <h1 className={styles.tittle}>What do you want to drink today?</h1>
     <PrimaryInput value={search} label="Search by your favorite ingredient" onChange={handleChange}/>
    <p className={styles.paragraph}>or</p>
    <ButtonPrimary label="get surpresed!" onClick={() => {}}/>
    </main>
    
  )
}


