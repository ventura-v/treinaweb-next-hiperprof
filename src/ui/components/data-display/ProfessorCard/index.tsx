import { Button, Typography } from "@mui/material";
import { 
    BoxAvatarStyled, 
    BoxCardStyled, 
    BoxContainsStyled, 
    ImageStyled 
} from "./styles";


export default function ProfessorCard() {

    return (
        <BoxCardStyled>
            <BoxAvatarStyled>
                <ImageStyled src="https://github.com/ventura-v.png" alt=""/>
            </BoxAvatarStyled>
            <BoxContainsStyled>
                <div className="text-container">
                    <Typography 
                        variant="h6"
                        className="descricao"
                        paragraph
                    >
                        Nome
                    </Typography>
                    <Typography 
                        variant="body2"
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        className="descricao"
                        paragraph
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit similique nihil, exercitationem quasi soluta architecto voluptates distinctio alias hic facilis doloremque doloribus praesentium sequi pariatur, omnis eos obcaecati nesciunt!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis nisi consequatur atque, error totam, natus impedit suscipit aut asperiores voluptatibus illum ad rem explicabo numquam quae accusantium magni. Placeat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates corrupti aperiam error beatae tenetur, obcaecati tempore debitis sed, molestiae voluptatibus voluptatum quo. Debitis, praesentium. Deleniti, nulla odio. Sint, modi?
                    </Typography>
                </div>
                <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => {}}
                >
                    Ver detalhes
                </Button>
            </BoxContainsStyled>
        </BoxCardStyled>
    )
}