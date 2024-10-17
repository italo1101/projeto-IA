import { Box, Typography } from "@mui/material";

const Barchart02 = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 100px)" // Subtrai a altura da barra de busca (ajuste conforme necessário)
      padding="20px"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="blueAccent[800]" // Mantenha a cor azul se necessário
        borderRadius="8px"
        padding="10px"
        width="60%" // Controlando a largura do Box
      >
        <img 
          src="../../assets/barchart03.jpeg" 
          alt="Imagem 1" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} 
        />
        <Typography 
          variant="body2" 
          color="black" 
          align="center"
        >
           Motocicletas: são responsáveis por mais da metade dos acidentes fatais, sendo o tipo de veículo mais perigoso, automóveis e Bicicletas têm números bem menores em comparação com motocicletas, ônibus e outros veículos têm uma participação mínima em acidentes fatais.

        </Typography>
      </Box>
    </Box>
  );
};

export default Barchart02;
