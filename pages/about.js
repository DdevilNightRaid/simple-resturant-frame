import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { Inter } from 'next/font/google'

// Importing Components 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Importing CSS 
import styles from '@/styles/About.module.css'

// Importing Images 
import chef from '../images/chef.png'
import waiter from '../images/waiter.png'
import delivery from '../images/delivery-man.png'
import momo from '../images/momo.png'
import rice from '../images/rice.png'
import burger from '../images/burger.png'
import pizza from '../images/pizza.png'
import sandwish from '../images/sandwish.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Resturant Name</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.navHolder}>
                <Navbar></Navbar>
            </div>
            <main className={styles.main}>
                <div className={styles.c1Field}>
                    <div className={styles.punchLine}>
                        <h2>We are thrilled to have you here.</h2>
                        <h1>Experience an adventure in culinary delight with our high-quality ingredients, bold flavors, and stunning presentation. Our menu features healthy and ethical options using locally and sustainably sourced ingredients. Come and savor our creations that will leave you craving for more.</h1>
                    </div>
                    <div className={styles.heroImage}>
                        <Image priority src={chef} alt={"hero Img"} className={styles.front_img}></Image>
                    </div>
                </div>
                <div className={styles.c2Field}>
                    <Image priority src={delivery} alt={"///"} className={styles.delivery}></Image>
                    <div className={styles.c3Field}>
                        <p>Our menu is waiting for you - place your order.</p>
                        <h3>From the kitchen to your table and home in no time, we serve up amazing food with a side of hospitality. Come and see what makes us the talk of the town.</h3>
                    </div>
                    <Image priority src={waiter} alt={"///"} className={styles.man}></Image>
                </div>
                <div className={styles.c4Field}>
                    <Image priority src={rice} alt={"///"} className={styles.rice}></Image>
                    <Image priority src={momo} alt={"///"} className={styles.momo}></Image>
                    <Image priority src={burger} alt={"///"} className={styles.burger}></Image>
                    <Image priority src={pizza} alt={"///"} className={styles.pizza}></Image>
                    <Image priority src={sandwish} alt={"///"} className={styles.sandwish}></Image>
                </div>
                <div className={styles.bttn}>
                    <button className={styles.btn}><Link href={"/menu"} className={styles.ctaOrder}>See The Menu</Link></button>
                </div>
                <Footer></Footer>
            </main>

        </>
    )
}