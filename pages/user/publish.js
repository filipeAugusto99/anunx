import { Button, Box, Container, Select, TextField, Typography, IconButton } from '@mui/material'
import DeleteForever from '@mui/icons-material/DeleteForever'
import { makeStyles } from '@mui/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},

  container: {
    padding: theme.spacing(8, 0, 6)
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  }, 
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  thumbsContainer: {
    display: 'flex',
    marginTop: 15,
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,
    margin: '0 15px 15px 0',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black'
  },
  thumb: {
    position: 'relative',
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    '& $mainImage': {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      height: '100%',
      weight: '100%',
    }
  }
}))

const Publish = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Publicar Anúncio
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          Quanto mais detalhado melhor!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Título do anúncio
          </Typography>
          <TextField 
            label="ex.: Bicicleta Arop 18 com garantia"
            size="small"
            fullWidth={true}
          />
          <br /> <br />
          <Typography component="h6" variant="h6" color="textPrimary">
            Categoria
          </Typography>
          <Select
            native
            value=""
            fullWidth
            onChange={()=> {}}
            inputProps={{
              name: 'age',
            }}
          >
            <option value="">Selecione</option>
            <option value={1}>Bebê e Criança</option>
            <option value={2}>Agricultura</option>
            <option value={3}>Moda</option>
            <option value={3}>Carros, Motos e Barcos</option>
            <option value={3}>Serviços</option>
            <option value={3}>Lazer</option>
            <option value={3}>Animais</option>
            <option value={3}>Móveis, Casa e Jardim</option>
            <option value={3}>Imóveis</option>
            <option value={3}>Equipamentos e Ferramentas</option>
            <option value={3}>Celulares e Tablets</option>
            <option value={3}>Esporte</option>
            <option value={3}>Tecnologia</option>
            <option value={3}>Emprego</option>
            <option value={3}>Outros</option>
          </Select>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Imagens
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            A primeira imagem é a foto principal do seu anúncio.
          </Typography>
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone}>
              <Typography variant="body2" color="textPrimary">
                Clique para adicionar ou arraste a imagem para aqui.
              </Typography>
            </Box>
            <Box 
              className={classes.thumb}
              style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
            >
              <Box className={classes.mainImage}>
                <Typography variant="body" color="secondary">
                  Principal
                </Typography>
              </Box>
              <Box className={classes.mask}>
                <IconButton color="secondary">
                  <DeleteForever fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary">
            Descrição
          </Typography>
          <Typography component="div" variant="body2" color="textPrimary">
            Escreva os detalhes do que está vendendo.
          </Typography>
          <TextField
            multilane
            rows={6}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
            Dados
          </Typography>
          <TextField
            label="Nome"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /> <br />
          <TextField
            label="E-mail"
            variant="outlined"
            size="small"
            fullWidth
          />
          <br /> <br />
          <TextField
            label="Telefone"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
      </Container>
      
      <Container maxWidth="md" className={classes.boxContainer}>
        <Box textAlign="right">
          <Button variant="contained" color="primary">
            Publicar Anúncio
          </Button>
        </Box>
      </Container>
      
    </TemplateDefault>
  )
}

export default Publish