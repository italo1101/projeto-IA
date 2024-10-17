import { Box, Typography } from "@mui/material";

const Line = () => {
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
          src="../../assets/linechart.png" 
          alt="Imagem 1" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} 
        />
        <Typography 
          variant="body2" 
          color="black" 
          align="center"
        >
          O número de acidentes varia ao longo do tempo, com um pico claro no início de 2020, seguido por uma queda, a partir de julho de 2020, há uma tendência de aumento gradual até o final do ano.
        </Typography>
      </Box>
    </Box>
  );
};

export default Line;
