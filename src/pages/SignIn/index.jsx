import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
export default function SignIn() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>
            <Box sx={{display:'flex',flexDirection:'column', gap:'30px',border:'1px solid black',padding:'50px',borderRadius:'5px'}}>
                <Box sx={{marginBottom:'6px',textAlign:'center'}}>
                    <Typography sx={{fontSize:'24px'}}>Welcome Back</Typography>
                    <Typography sx={{fontSize:'20px'}}>Sign in to continue to Invoika.</Typography>
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <Typography sx={{marginBottom:'6px'}}>User Name</Typography>
                    <TextField fullWidth placeholder='your name please' />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <Typography sx={{marginBottom:'6px'}}>User Password</Typography>
                    <TextField fullWidth placeholder='your password please' />
                    
                </Box>
                <Button fullWidth variant="contained">Sign In</Button>
                <Typography sx={{textAlign:'center'}}>Don't have an account ? SignUp</Typography>

            </Box>
        </Box>
    );
}