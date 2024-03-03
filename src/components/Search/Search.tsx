import { SearchType } from './type';

const Search = ({ query, onSearch }: SearchType) => {
    return(
        <div>      
            <input
                type='text'
                value={query}
                onChange={onSearch}
                placeholder='Search movie'
                style={{
                    border:'1px solid grey', 
                    cursor:'pointer', 
                    padding:'.5rem', 
                    outline:'none' 
                }}
            />
      </div>
    )
}

export default Search