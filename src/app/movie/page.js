import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '41047a23b3msha41cc4126545c4ap1f92d6jsndff70637dd65',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    
    // Check if the response is ok
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    console.log(data); // Log the full response to inspect its structure

    const main_data = data.titles || []; // Ensure main_data is an array

    return (
        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Series & Movie</h1>
                <div className={styles.card_section}>
                    {
                        main_data.map((curElem) => (
                            <div key={curElem.id}>
                                <MovieCard {...curElem} />
                                <p>{curElem.jawSummary}</p> {/* Access jawSummary correctly */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Movie;
