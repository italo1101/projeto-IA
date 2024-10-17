import { Box, Typography } from "@mui/material";

const Barchart03 = () => {
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
          src="../../assets/barchart01.jpeg" 
          alt="Imagem 1" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} 
        />
        <Typography 
          variant="body2" 
          color="black" 
          align="center"
        >
          A faixa etária mais afetada por acidentes fatais é a de 18-24 anos, seguida por 25-34 anos, o número de acidentes fatais diminui à medida que a faixa etária aumenta, sendo bem menor a partir dos 45 anos.
        </Typography>
      </Box>
    </Box>
  );
};

export default Barchart03;
