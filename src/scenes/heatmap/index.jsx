import { Box, Typography } from "@mui/material";

const Heatmap = () => {
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
          src="../../assets/heatmap.png" 
          alt="Imagem 1" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} 
        />
        <Typography 
          variant="body2" 
          color="black" 
          align="center"
        >
          A maior parte dos acidentes ocorre nos dias úteis, com picos nas terças, quartas e quintas, os horários mais críticos são durante os períodos de pico de tráfego: manhã (8h) e tarde (17h-18h), Aos fins de semana, o número de acidentes diminui, com alguns picos menores à tarde, especialmente aos sábados e domingos.
        </Typography>
      </Box>
    </Box>
  );
};

export default Heatmap;
