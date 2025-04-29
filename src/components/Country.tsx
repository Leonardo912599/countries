import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'

type Props = {
    imagen: string | undefined,
    name: string | undefined,
    region: string | undefined,
    population: number | undefined,
    capital: string | undefined
}

const Country = ({ imagen, name, region, population, capital }: Props) => {
    return (
        <Card>
            <CardMedia component={'img'} alt='conuntry' height={180} image={imagen} />
            <CardContent>
                <Typography my={1} fontSize={20} fontWeight={'bold'}>{name}</Typography>
                <Typography fontSize={15}>
                    <Box sx={{fontSize:15}} component="span" fontWeight="bold">
                        Population:
                    </Box> {population}
                </Typography>
                <Typography fontSize={15}>
                    <Box sx={{fontSize:15}} component="span" fontWeight="bold">
                        Region: 
                    </Box>
                    {region}
                </Typography>
                <Typography fontSize={15}>
                    <Box sx={{fontSize:15}} component="span" fontWeight="bold">
                        Capital: 
                    </Box>
                    {capital}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Country