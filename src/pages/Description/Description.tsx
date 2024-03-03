import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as HomeLink } from 'react-router-dom';
import { format} from 'date-fns';
import { interceptor } from '../../api/axios';
import { Box, Button, ImageList, ImageListItem, Link, List, ListItem, Card, CardContent, CardMedia, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Layout from '../../components/Layout/Layout';
import NoData from '../../components/Empty/Empty';
import { GenresType, MovieType, ProductionCompaniesType } from './type';

const Description = () => {
  const [data, setData] = useState<MovieType>({
    id: 0,
    homepage: '',
    overview: '',
    vote_average: 0,
    tagline: '',
    title: '',
    poster_path: '',
    release_date: '10/12/1970',
    runtime: 0,
    production_companies: [],
    genres: []
  }); 
  const { id } = useParams();

  const fetchMovies = async () => {
    const response = await interceptor.get(`https://api.themoviedb.org/3/movie/${id}`);
    const data = await response.data;
    setData(data)
  }

  useEffect(() => {
    fetchMovies();
  }, []);

    return (
      <Layout title={data?.title}>
        <Box 
          sx={{
            margin:'auto',
            width:'80rem', 
            marginX:'auto', 
            marginY:'5rem'
          }}
        >
          <Box 
            sx={{
              color:'#90a4ae',
              display:'flex', 
              alignItems:'center', 
              width:'3rem'
            }}>
              <KeyboardArrowLeftIcon sx={{ paddingTop:'.1rem' }}/>
              <HomeLink 
                to={`/`} 
                style={{
                  margin:'auto', 
                  color:'#90a4ae', 
                  textDecoration:'none'
                }}
              >
                Home 
              </HomeLink>
          </Box>
          {data ? 
            <Card 
              sx={{ 
                display: 'flex', 
                width: 'auto', 
                boxShadow:'none', 
                border:'solid #eceff1 1px', 
                background:'#f5f5f5', 
                marginTop:'2rem'
              }}
            >
              <CardMedia
                component='img'
                sx={{ 
                  width: 300, 
                  marginRight: '3rem' 
                }}
                image={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt={data?.title}
              />
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent:'space-between'
                }}
              >
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component='div' variant='h5' sx={{ color:'#424242' }}>
                    {data?.title}
                  </Typography>
                  <Typography 
                    sx={{
                      color: '#ffab40', 
                      fontSize:'14px', 
                      fontWeight: 500
                    }}>
                      {data?.tagline}
                  </Typography>
                  <Box sx={{ display: 'flex', paddingTop:'1rem'}}>
                    <Typography 
                      sx={{
                        fontSize:'12px', 
                        paddingRight:'1rem', 
                        color:'#9ccc65'
                      }}
                    >
                      {format(new Date(data?.release_date), 'yyyy')}
                    </Typography>
                    <Typography 
                      sx={{
                        fontSize:'12px', 
                        paddingRight:'1rem', 
                        color:'#9ccc65'
                      }}> 
                      {Math.floor(data.runtime / 60)}h {data.runtime % 60}min
                    </Typography>
                    <Box display='flex' alignItems='center'>
                      <StarRateIcon sx={{color: '#ffab40', fontSize:'13px'}}/>
                      <Typography 
                        sx={{
                          color:'#616161', 
                          fontSize:'12px', 
                          paddingLeft:'.2rem'
                        }}
                      >
                        {data?.vote_average}
                      </Typography>
                    </Box>
                  </Box>
                  <List 
                    sx={{
                      display: 'flex', 
                      flexDirection:'row', 
                      fontSize: '12px', 
                      textAlign:'left', 
                      padding: 0
                    }}
                  >
                    {data?.genres.map(({ name, id } : GenresType) => {
                      return(
                        <ListItem 
                          key={id}
                          sx={{
                            color:'#90a4ae', 
                            width: 'auto', 
                            paddingRight: '1rem', 
                            paddingLeft: 0
                          }} 
                        >
                          {name}
                        </ListItem>
                      )
                    })}
                  </List>
                  <Typography component='div' variant='h5' sx={{color:'#424242', fontSize:'.85rem', marginTop: '1rem'}}>
                      {data?.overview}
                  </Typography>
                  <Link href={data?.homepage}>
                    <Button variant='contained' sx={{textTransform:'inherit', marginTop:'2rem'}}>Watch</Button>
                  </Link>
                </CardContent>
                <Box sx={{ paddingLeft:'1rem' }}>
                  {data?.production_companies.length && (
                    <ImageList sx={{ height: 'auto', display: 'flex', flexDirection:'row' }} >
                      {data?.production_companies.map(({ logo_path, name } : ProductionCompaniesType) => (
                        <ImageListItem key={name} sx={{ marginRight:'.5rem', width:'4rem' }}>
                          <img
                            srcSet={`https://image.tmdb.org/t/p/w300/${logo_path}`}
                            src={`https://image.tmdb.org/t/p/w300/${logo_path}`}
                            alt={name}
                            loading='lazy'
                            style={{
                              width: '100%', 
                              objectFit: 'contain'
                            }}
                          />
                        </ImageListItem> 
                      ))}
                    </ImageList>
                  )}
                </Box>
              </Box>
            </Card> 
          : 
          <NoData 
            text={'Something went wrong, please go to main page'} 
            children={
              <HomeLink to={'/'}>
                <Button variant='contained' color='error'> Home</Button>
              </HomeLink>
            }
          />
        }
        </Box>
      </Layout>
    )
}

export default Description