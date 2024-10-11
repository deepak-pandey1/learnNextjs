import styles from '@/app/styles/common.module.css';
import Image from "next/image";
import Link from "next/link";

const MovieCard = (curElem) => {
    const { id, type, title, synopsis, backgroundImage } = curElem.jawSummary || {};

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image 
                        src={backgroundImage?.url || '/fallback-image.jpg'} 
                        alt={title || 'No title available'} 
                        width={260} 
                        height={200} 
                    />
                </div>
                <div className={styles.card_data}>
                    <h2>{title?.substring(0, 18) || 'Untitled'}</h2>
                    <p>{`${synopsis?.substring(0, 66) || 'No synopsis available'} ...`}</p>

                    {id ? (
                        <Link href={`/movie/${id}`}>
                            <button>Read More</button>
                        </Link>
                    ) : (
                        <p>Invalid movie ID</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default MovieCard;
