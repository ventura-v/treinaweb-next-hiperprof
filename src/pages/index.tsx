import PageTitle from '@components/data-display/PageTitle'
import useIndex from '@data/hooks/pages/useIndex'
import { Button, Icon, TextField } from '@mui/material'
import { BoxButtons, HomeContainer } from '@styles/pages/index.styles'

export default function Home() {
  const { setSearch, messageErro, onBuscarProfessor } = useIndex()

  return (
    <HomeContainer onSubmit={onBuscarProfessor}>
      <PageTitle 
        title="encontre o professor ideal para você!" 
        subtitle='pesquise pelo professor ideal para você'
      />

      <TextField 
        sx={{ mt: 3, mb: 1}} 
        label={'Encontre um professor'}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>
        }}
        fullWidth
        required
        onChange={({ target: { value } }) => setSearch(value)}
        error={messageErro.length > 0}
        helperText={messageErro}
      />
      <BoxButtons>
        <Button type='submit' variant='contained'>
          Buscar pelo professor perfeito
        </Button>
      </BoxButtons>
    </HomeContainer>
  )
}
