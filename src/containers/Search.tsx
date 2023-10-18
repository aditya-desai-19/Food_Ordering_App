import React from 'react';
//@ts-ignore
import styles from './styles/Search.module.css';

interface SearchProps {
    onChange: (e: any) => void;
    value: string;
    onClick: (e: any) => void;
}

const Search: React.FC<SearchProps> = ({ onChange, value, onClick }) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Search.."
                className={styles.searchInput}
                onChange={onChange}
                value={value}
            />
            <button
                type='submit'
                className={styles.searchButton}
                onClick={onClick}
            >Search</button>
        </div>
    )
}

export default Search;