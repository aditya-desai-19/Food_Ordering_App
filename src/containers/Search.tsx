import React from 'react';
//@ts-ignore
import styles from './styles/Search.module.css';

const Search: React.FC = () => {
    return (
        <form className={styles.search}>
            <input type="text" placeholder="Search.." className={styles.searchInput}/>
            <button type='submit' className={styles.searchButton}>Search</button>
        </form>
    )
}

export default Search;