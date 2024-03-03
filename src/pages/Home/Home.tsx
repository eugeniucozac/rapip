import { ChangeEvent, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';
import { interceptor } from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import Movie from '../../components/Movie/Movie'
import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import Empty from '../../components/Empty/Empty';
import { MovieType } from './type';

const Home = () => {
    const [data, setData] = useState<MovieType[]>([]); 
    const [query, setQuery] = useState<string>('');
    const [filteredData, setFilteredData] = useState<MovieType[]>([]); 
    const debouncedValue = useDebounce(query, 1000);
    
    const fetchMovies = async (page: number = 1) => {
        const response = await interceptor.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', { params: { page: page } })
        const data = await response?.data.results;
        setData(data);
        setFilteredData(data);
    }  

    useEffect(() => {  
        fetchMovies();
    }, []);

    useEffect(() => {
        const searchResults = data?.filter((item: MovieType) => item.title.toLowerCase().includes(query?.toLowerCase()));
        setFilteredData(searchResults);
    }, [debouncedValue]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => { 
      const query = event.target.value;
      setQuery(query)
    }

    return (
        <Layout title='Home'>
            <Box 
                width={1000} 
                margin={'auto'}
                padding={10}
            >
                <Search query={query} onSearch={handleSearch}/>
                <Grid 
                    container 
                    spacing={{ 
                        xs: 2, 
                        md: 2 
                    }} 
                    columns={{ 
                        xs: 4, 
                        sm: 8, 
                        md: 8
                    }} 
                >
                    {filteredData?.length 
                        ? 
                        filteredData.map(({ title,poster_path,id,release_date }: MovieType) => {
                            const releaseDate = release_date && format(new Date(release_date), 'yyyy')
                            return (
                                <Grid 
                                    item 
                                    xs={1} 
                                    sm={2}
                                    md={2} 
                                    key={id} 
                                    sx={{
                                        marginTop:'2rem'
                                    }}
                                >
                                    <Movie 
                                        id={id} 
                                        img={poster_path} 
                                        title={title} 
                                        releaseDate={releaseDate}
                                    />
                                </Grid>
                            )
                        }) 
                        : 
                        <Empty text='Something went wrong, please try again later'/>
                    }
                </Grid>
            </Box>
        </Layout>
       )
}

export default Home