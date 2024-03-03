import { Box } from '@mui/material';
import Header from '../Header/Header';
import { LayoutType } from './type';

const Layout = ({ children, title }: LayoutType) => { 
    return (
        <Box>
            <Header title={title}/>
            {children}
        </Box>
    )
}

export default Layout