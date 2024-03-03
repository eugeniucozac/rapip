import { Typography, Box } from '@mui/material';
import Image from '../../assets/bg.jpg';
import { HeaderType } from './type';

const Header = ({ title }: HeaderType) => {
    return(
        <header role='banner'>
            <Box 
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ 
                    backgroundImage: `url(${Image})`,
                    height: '20rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundPositionY: 'center',
                }}>
                <Typography 
                    variant='h3' 
                    component='h2' 
                    sx={{
                        color: 'white', 
                        marginTop:'auto', 
                        marginBottom:'auto'
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </header>
    )
}

export default Header