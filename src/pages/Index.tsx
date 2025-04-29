
import { Box, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import countries from '../../data.json'
import { Pais } from '../interface/countries';
import Country from '../components/Country';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const Index = () => {

    const [region, setRegion] = useState<string>('');
    const [search, setSearch] = useState<string>('')
    const countriesArray: Pais[] = countries;
    const filterRegion = countriesArray.filter(c => {

        if (region === 'Africa') return c.region === 'Africa'
        if (region === 'America') return c.region === 'Americas'
        if (region === 'Asia') return c.region === 'Asia'
        if (region === 'Europe') return c.region === 'Europe'
        if (region === 'Oceania') return c.region === 'Oceania'

    })

    const filterSearch = countriesArray.filter(c =>
        c.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 5, mt: 4, px: { xs: 2, sm: 5 } }}>
                <FormControl>
                    <TextField
                        id="search"
                        variant="outlined"
                        value={search}
                        placeholder="Search for a country..."
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                sx: {
                                    height: 40, pl: 0, display: 'flex', alignItems: 'center', fontSize: 14,
                                },
                            },
                            root: {
                                sx: {
                                    minWidth: 300, backgroundColor: 'white', boxShadow: 2,
                                    borderRadius: 2, px: 2, py: 1, '& fieldset': { border: 'none', },
                                },
                            },
                        }}
                        onChange={(e) => {
                            setRegion('')
                            setSearch(e.target.value)
                        }}
                    />
                </FormControl>

                <FormControl sx={{
                    minWidth: 200, height: 40, display: 'flex', justifyContent: 'space-between', fontSize: 14,
                    backgroundColor: 'white', boxShadow: 2, borderRadius: 2, px: 2, py: 1, '& fieldset': { border: 'none', },
                }}>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>Filter By Region</InputLabel>
                    <Select id="filter" label="filter"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        sx={{
                            height: 40, fontSize: 14,
                            '& .MuiSelect-select': {
                                display: 'flex',
                                alignItems: 'center',
                            },
                        }}
                    >
                        <MenuItem value={'Africa'}>Africa</MenuItem>
                        <MenuItem value={'America'}>America</MenuItem>
                        <MenuItem value={'Asia'}>Asia</MenuItem>
                        <MenuItem value={'Europe'}>Europe</MenuItem>
                        <MenuItem value={'Oceania'}>Oceania</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {
                region !== '' ? (
                    <Grid sx={{ p: { xs: 6, sm: 5 } }} container spacing={9}>
                        {filterRegion.map((c, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <Link component={RouterLink} to={`/detail-country/${c.name}`} underline="none">
                                    <Country
                                        imagen={c.flag}
                                        name={c.nativeName}
                                        population={c.population}
                                        region={c.region}
                                        capital={c.capital}
                                    />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                ) : search !== '' ? (
                    <Grid sx={{ p: 5 }} container spacing={9}>
                        {filterSearch.map((c, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <Link component={RouterLink} to={`/detail-country/${c.name}`} underline="none">
                                    <Country
                                        imagen={c.flag}
                                        name={c.name}
                                        population={c.population}
                                        region={c.region}
                                        capital={c.capital}
                                    />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Grid sx={{ p: 5 }} container spacing={9}>
                        {countriesArray.slice(0, 16).map((c, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <Link component={RouterLink} to={`/detail-country/${c.name}`} underline="none">
                                    <Country
                                        imagen={c.flag}
                                        name={c.name}
                                        population={c.population}
                                        region={c.region}
                                        capital={c.capital}
                                    />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </>
    )
}

export default Index