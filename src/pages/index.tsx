import PageTitle from '@components/data-display/PageTitle'
import { Button, Icon, TextField } from '@mui/material'
import { BoxButtons, HomeContainer } from '@styles/pages/index.styles'

export default function Home() {
  return (
    <HomeContainer>
      <PageTitle 
        title="encontre o professor ideal para você!" 
        subtitle='pesquise pelo professor ideal para você'
      />

      <TextField sx={{ mt: 3, mb: 1}} 
        label={'Encontre um professor'}
        InputProps={{
          startAdornment: <Icon>search</Icon>
        }}
        fullWidth
        required
      />
      <BoxButtons>
        <Button type='submit' variant='contained'>
          Buscar pelo professor perfeito
        </Button>
      </BoxButtons>
    </HomeContainer>
  )
}
