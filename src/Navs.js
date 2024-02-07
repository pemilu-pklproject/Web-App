import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack'; 
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import Divider from '@mui/material/Divider';
import App from './App';

const Navs = () => {
    return ( 

        <Drawer
            sx={{
                width: '250px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: '250px',
                boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >

        <h1>Aplikasi Pemilu</h1>
                
        <Divider variant="middle" />

        <Stack spacing={0.5} sx={{ mt: 10}}>
            <Button variant="contained" color="primary" startIcon={<HomeIcon />} style={{
                borderRadius:'12px', width:'82%', marginLeft:'9%', textTransform: 'none', textAlign:'left', justifyContent: "flex-start", fontWeight: '900'
            }} sx={{ pt:1, pb:1}}>Dashboard</Button>
            <Button variant="text" color="primary" startIcon={<PersonIcon />} style={{
                borderRadius:'12px', width:'82%', marginLeft:'9%', textTransform: 'none', textAlign:'left', justifyContent: "flex-start", fontWeight: '900' 
            }} sx={{ pt:1, pb:1}}>Data Kandidat</Button>
            <Button variant="text" color="primary" startIcon={<GroupIcon />} style={{
                borderRadius:'12px', width:'82%', marginLeft:'9%', textTransform: 'none', textAlign:'left', justifyContent: "flex-start", fontWeight: '900' 
            }} sx={{ pt:1, pb:1}}>Data Relawan</Button>
        </Stack>

        </Drawer>

        

    );
}
 
export default Navs;