import { Box, Typography, Button } from "@mui/material"
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Mode } from "../App";

type Props = {
   mode:Mode,
   setMode:React.Dispatch<React.SetStateAction<Mode>>
}

const Navbar = ({mode,setMode}:Props) => {

    const changeMode = () => {
        if (mode === "light") setMode('dark')
        if (mode === 'dark') setMode('light')
    }
    return (
        <Box sx={{ display: 'flex', boxShadow: 2, justifyContent: 'space-between', alignItems: 'center', backgroundColor: mode === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)', px: { xs: 2, sm: 5 }, py: 2 }}>
            <Typography color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'} fontWeight={'bold'} fontSize={{ xs: 18, sm: 20 }} variant='h5'>Where in the world?</Typography>
            <Button sx={{ color: mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)' }} onClick={() => changeMode()} startIcon={mode === "light" ? <NightlightRoundIcon /> : <WbSunnyIcon />}>
                {mode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
        </Box>
    )
}

export default Navbar