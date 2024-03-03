import { Box } from '@mui/material'
import AndroidIcon from '@mui/icons-material/Android';
import { EmptyType } from './type';

const Empty = ({ children, text } : EmptyType) => {
    return (
        <Box 
            sx={{
                marginTop: '2rem', 
                padding:'1rem', 
                margin:'auto', 
                color: '#9e9e9e'
            }}
        >
            <AndroidIcon 
                sx={{
                    color: '#ff9100', 
                    width: '7rem', 
                    height:'auto'
                }}
            />
            <div>No Data</div>
            <div>{text}</div>
            {children}
        </Box>
    )
}

export default Empty