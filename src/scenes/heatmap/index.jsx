import { Box } from "@mui/material";
import Header from "../../components/Header";

const Heatmap = () => {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="blueAccent[800]" // Mantenha a cor azul se necessário
        borderRadius="8px"
        padding="10px"
        height="200px" // Aumentando a altura para melhor centralização
      >
        <img 
          src="../../assets/heatmap.png" 
          alt="Imagem 1" 
          style={{ width: '60%', height: 'auto', borderRadius: '8px', margin: 'auto' }} // Adicionando margin auto
        />
      </Box>
    </Box>
  );
};

export default Heatmap;
