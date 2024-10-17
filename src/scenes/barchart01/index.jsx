import { Box, Typography } from "@mui/material";

const Barchart01 = () => {
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
          src="../../assets/barchart02.png" 
          alt="Imagem 1" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }} 
        />
        <Typography 
          variant="body2" 
          color="black" 
          align="center"
        >
          A maioria dos acidentes é não fatal, seguida por acidentes sem ferimentos, 
          acidentes fatais são extremamente raros em comparação com os outros tipos, 
          há poucos acidentes não informados, representando uma pequena parcela.
        </Typography>
      </Box>
    </Box>
  );
};

export default Barchart01;
