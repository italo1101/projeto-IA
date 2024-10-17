import { Box, Button, Container, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container maxWidth="xl">
      {/* HEADER */}
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Painel de Controle" subtitle="Bem vindo ao painel de estudo de acidentes" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.redAccent[400],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon />
              Baixar Dados
            </Button>
          </Box>
        </Box>
      </Box>

      {/* GRID & IMAGENS */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} // 2 colunas para telas pequenas e 3 para telas maiores
        gap="20px" // Espaçamento entre as imagens
      >
        {/* Imagem 1 */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.blueAccent[800]}
          borderRadius="8px"
          padding="10px"
        >
          <img 
            src="../../assets/heatmap.png" 
            alt="Imagem 1" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        {/* Imagem 2 */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.blueAccent[800]}
          borderRadius="8px"
          padding="10px"
        >
          <img 
            src="../../assets/barchart02.png" 
            alt="Imagem 2" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        {/* Imagem 3 */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.blueAccent[800]}
          borderRadius="8px"
          padding="10px"
        >
          <img 
            src="../../assets/linechart.png" 
            alt="Imagem 3" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>

        {/* Imagem 4 */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.blueAccent[800]}
          borderRadius="8px"
          padding="10px"
          height="350px"
        >
          <img 
            src="../../assets/barchart03.jpeg" 
            alt="Imagem 4" 
            style={{ width: '100%', height: '90%', borderRadius: '8px' }}
          />
        </Box>

        {/* Imagem 5 */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.blueAccent[800]}
          borderRadius="8px"
          padding="10px"
        >
          <img 
            src="../../assets/barchart01.jpeg" 
            alt="Imagem 5" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
