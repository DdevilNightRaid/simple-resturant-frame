import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

// Importing Components 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

// Importing CSS 
import styles from '@/styles/Home.module.css'

// Importing Images 
import HeroImg1 from "../images/foods/heroImg1.png"
import HeroImg from "../images/foods/sushi.png"
import Dish1 from "../images/foods/dish1.png"
import Dish2 from "../images/foods/dish2.png"
import Dish3 from "../images/foods/dish3.png"
import Burger from "../images/foods/burger.png"
import Plate1 from "../images/foods/plate1.png"
import Salad from "../images/foods/salad.png"
import Plate2 from "../images/foods/plate2.png"
import HotDog from "../images/foods/hotDog.png"
import client1 from "../images/clients/client1.jpg"
import client2 from "../images/clients/client2.jpg"
import client3 from "../images/clients/client3.jpg"
import client4 from "../images/clients/client4.jpg"
import client5 from "../images/clients/client5.jpg"

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Resturant Name</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainBody}>
        <div className={styles.heroContainer}>
          <Navbar></Navbar>
          <div className={styles.heroChild}>
            <div className={styles.hPart0}>
              <h1 className={styles.heroHeading}>Restaurant Name</h1>
              <p className={styles.heroPara}>Give your tounge a taste of authentic Italian foods </p>
              <button className={styles.ctaBTN1}>
                <Link href={"/menu"} className={styles.ctaOrder}>Order Now</Link>
              </button>
            </div>
            <div className={styles.hPart1}>
              <Image priority src={HeroImg1} alt={"hero Img"} className={styles.heroImg}></Image>
            </div>
          </div>
        </div>
        <div className={styles.section1}>
          <div className={styles.field0}>
            <div className={styles.s1F0box}>
              <Image priority src={Dish1} alt={"hero Img"} className={styles.boxImg}></Image>
              <strong classsName={styles.s1F0BStrong}>Product name</strong>
            </div>
            <div className={styles.s1F0box}>
              <Image priority src={Dish2} alt={"hero Img"} className={styles.boxImg}></Image>
              <strong classsName={styles.s1F0BStrong}>Product name</strong>
            </div>
            <div className={styles.s1F0box}>
              <Image priority src={Dish3} alt={"hero Img"} className={styles.boxImg}></Image>
              <strong classsName={styles.s1F0BStrong}>Product name</strong>
            </div>
          </div>
          <div className={styles.field1}>
            <strong classsName={styles.s1F1Title}>Product name</strong>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.container0}>
            <Image priority src={Burger} alt={"hero Img"} className={styles.s2Image}></Image>
          </div>
          <div className={styles.container1}>
            <h2 className={styles.s2Heading}>Who you are?</h2>
            <p className={styles.s2Para}>At our restaurant, we offer an unforgettable dining experience with locally-sourced ingredients, exceptional service, and a cozy atmosphere perfect for any occasion. Come and join us for a culinary adventure that will tantalize your taste buds and leave you eager to return.</p>
            <button className={styles.ctaAbout}>
              <Link href={"/about"} className={styles.ctaOrder}>About Us</Link>
            </button>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.clientBox}>
            <div className={styles.cbImageBox}>
              <Image priority src={client1} alt={"hero Img"} className={styles.clientPic}></Image>
            </div>
            <div className={styles.cbName}>
              <strong className={styles.clientName}>Sarah Johnson</strong>
              <p className={styles.clientFeedback}>My husband and I celebrated our anniversary at this restaurant, and it was the perfect choice.</p>
            </div>
          </div>
          <div className={styles.clientBox}>
            <div className={styles.cbImageBox}>
              <Image priority src={client2} alt={"hero Img"} className={styles.clientPic}></Image>
            </div>
            <div className={styles.cbName}>
              <strong className={styles.clientName}>John Smith</strong>
              <p className={styles.clientFeedback}>I have traveled the world, and I can honestly say that this was the best restaurant I have ever been to. </p>
            </div>
          </div>
          <div className={styles.clientBox}>
            <div className={styles.cbImageBox}>
              <Image priority src={client5} alt={"hero Img"} className={styles.clientPic}></Image>
            </div>
            <div className={styles.cbName}>
              <strong className={styles.clientName}>Emily Jones</strong>
              <p className={styles.clientFeedback}>I have a gluten allergy, and the staff at this restaurant went above and beyond to accommodate my needs.</p>
            </div>
          </div>
          <div className={styles.clientBox}>
            <div className={styles.cbImageBox}>
              <Image priority src={client4} alt={"hero Img"} className={styles.clientPic}></Image>
            </div>
            <div className={styles.cbName}>
              <strong className={styles.clientName}> Mark Brown</strong>
              <p className={styles.clientFeedback}>You guyz provided the best experience with the best meal</p>
            </div>
          </div>
          <div className={styles.clientBox}>
            <div className={styles.cbImageBox}>
              <Image priority src={client3} alt={"hero Img"} className={styles.clientPic}></Image>
            </div>
            <div className={styles.cbName}>
              <strong className={styles.clientName}>Jashmin</strong>
              <p className={styles.clientFeedback}>I have never tasted food quite like the dishes served at this restaurant.</p>
            </div>
          </div>
        </div>
        <div className={styles.section4}>
          <div className={styles.s4Container0}>
            <h2 className={styles.s4Heading}>Pick now from the varity of dishes</h2>
            <button className={styles.ctaAbout}>
              <Link href={"/menu"} className={styles.ctaOrder}>Order Now</Link>
            </button>
          </div>
          <div className={styles.s4Container1}>
            <div className={styles.s4SmallImg}>
              <Image priority src={Plate1} alt={"hero Img"} className={styles.smallPic}></Image>
            </div>
            <div className={styles.s4SmallImg1}>
              <Image priority src={Salad} alt={"hero Img"} className={styles.smallPic}></Image>
            </div>
            <div className={styles.s4SmallImg2}>
              <Image priority src={Plate2} alt={"hero Img"} className={styles.smallPic}></Image>
            </div>
            <div className={styles.s4SmallImg3}>
              <Image priority src={HotDog} alt={"hero Img"} className={styles.smallPic}></Image>
            </div>
            <div className={styles.s4HeroImg}>
              <Image priority src={HeroImg} alt={"hero Img"} className={styles.s4HeroImage}></Image>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}
