import { Box, Button, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import countries from '../../data.json'
import { Pais } from "../interface/countries"
import { Mode } from "../App"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

type Props = {
    mode: Mode
}

const DetailCountry = ({ mode }: Props) => {

    const { name } = useParams();

    if (name === undefined) {
        throw new Error('Name no encontrado');
    }

    const country: Pais = countries.find(c => c.name === name)!

    let borders: string[] | undefined = []

    countries.forEach(c => {
        country.borders?.forEach((b) => {
            if (b === c.alpha3Code) borders.push(c.nativeName)
        })
    })

    return (
        <Box sx={{backgroundColor: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)',height:'100%'}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', my:10}}>
                <Box sx={{ display: 'flex', alignItems: 'start', width: '85%' }}>
                    <Link component={RouterLink} to={'/'} >
                        <Button variant="contained" sx={{ backgroundColor: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(209, 23%, 22%)', color: mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)' }} startIcon={<ArrowBackIcon />}>Back</Button>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', gap: 15, flexDirection: { xs: 'column', sm: 'column', md: 'row' }, width: '85%', my: 6 }}>
                    <Box component={'img'} sx={{ width: { xs: '100%', sm: '100%', md: 500 } }} src={country.flag} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', gap: 2, width: '100%' }}>
                        <Typography color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'} fontWeight={'bold'} variant="h5">{country.name}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', gap:{xs:5,sm:12}, flexDirection:{xs:'column',sm:'row'}, width: '100%' }}>
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column',gap:1}}>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Native Name: </Box>
                                    {country.nativeName}
                                </Typography>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Population: </Box>
                                    {country.population}
                                </Typography>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Region: </Box>
                                    {country.region}
                                </Typography>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Sub Region: </Box>
                                    {country.subregion}
                                </Typography>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Capital: </Box>
                                    {country.capital}
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column',gap:1}}>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Top Level Domain: </Box>
                                    {country.topLevelDomain}
                                </Typography>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Currency: </Box>
                                    {country.currencies?.[0].name}
                                </Typography>
                                <Typography variant="body2" color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'}>
                                    <Box component="span" fontWeight="bold">Languages: </Box>
                                    {country.languages?.map(language => language.name).join(', ')}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: {xs:'start',sm:'center'}, flexDirection: {xs:'column',sm:'row'}, gap: 1, mt: 4 }}>
                            <Typography color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'} fontSize={15} fontWeight={'bold'}>Border Countries:</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: {xs:'start',sm:'center'}, alignItems: 'center', flexDirection: 'row', gap: 1 }}>
                                {
                                    borders.map(b => (
                                        <Box sx={{
                                            backgroundColor: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(209, 23%, 22%)', p: 0.5, boxShadow: 2,
                                            borderRadius: 2
                                        }}>
                                            <Typography color={mode === 'light' ? 'black' : 'hsl(0, 0%, 100%)'} variant="body2">{b}</Typography>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DetailCountry