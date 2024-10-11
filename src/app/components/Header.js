import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/a1.jpg" alt="my logo image" width={100} height={100}/>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;