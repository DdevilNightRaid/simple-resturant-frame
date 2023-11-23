import Link from "next/link";

// Importing CSS 
import styles from '@/styles/Footer.module.css'

// Importing Icons 
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.socialMedia}>
                    <div className={styles.footIconsBox}>
                        <Link href={"https://www.facebook.com/themisfitofnightraid"}>
                            <FaFacebookF className={styles.footIcons} />
                        </Link>
                    </div>
                    <div className={styles.footIconsBox}>
                        <Link href={"/"}>
                            <FaInstagram className={styles.footIcons} />
                        </Link>
                    </div>
                    <div className={styles.footIconsBox}>
                        <Link href={"/"}>
                            <FaTiktok className={styles.footIcons} />
                        </Link>
                    </div>
                </div>
                <div className={styles.midFoot}>
                    <h1 classsName={styles.midName}>Restaurant Name</h1>
                    <div className={styles.footBar}></div>
                    <strong classsName={styles.midNum}>+ 977 9817109084</strong>
                </div>
                <div className={styles.finalFoot}>
                    <Link href={"/"} className={styles.ctaOrder}>Home</Link>
                    <Link href={"/about"} className={styles.ctaOrder}>About</Link>
                    <Link href={"/menu"} className={styles.ctaOrder}>Menu</Link>
                </div>
                <div className={styles.themisfitofnightraid}>
                    <strong classsName={styles.themisfitofnightraid}>Developed By: <Link href={"http://themisfitofnightraid.com"}>TheMisFitOfNightRaid</Link></strong>
                </div>
            </footer>
        </>
    );
};

export default Footer;
