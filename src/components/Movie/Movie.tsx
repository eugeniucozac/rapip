import { Link } from 'react-router-dom';
import { CardActionArea, CardContent, Card, CardMedia, Typography } from '@mui/material';
import { excerpt } from '../../utils';
import { MovieType } from './type';

const Movie = ({ id, title, img, releaseDate }: MovieType ) => {
    const titleExcerpt = excerpt(title, 20);

    return(
      <Link 
        to={`/${id}`} 
        style={{
          margin: 'auto',
          textDecoration:'none'
        }}
      >
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              sx={{ height: 250 }}
              image={`https://image.tmdb.org/t/p/w300/${img}`}
              alt={titleExcerpt}
            />
            <CardContent>
             <Typography gutterBottom variant='h5' component='p' fontSize={14} fontWeight={600}>
                {titleExcerpt}
              </Typography>
              <Typography gutterBottom variant='h5' component='p' fontSize={14} fontWeight={300}>
               {releaseDate}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    )
}

export default Movie
