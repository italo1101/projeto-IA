import { Box, Button, Container, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import AccidentsBarData from "../../components/AccidentsBarData";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

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

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: 'repeat(12, 1fr)' }}
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Line Chart */}
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 8' }}
          gridRow="span 2"
          backgroundColor={colors.blueAccent[800]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[900]}
              >
                Histórico de Acidentes
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Total: 1075.00
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>

          {/* Recent Transactions */}
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Produtos Mais Vendidos */}
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 4' }}
          gridRow="span 2"
          backgroundColor={colors.blueAccent[800]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Proporção de Acidente por Tipo de Veículo
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>

        {/* Gastos e Ganhos */}
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 4' }}
          gridRow="span 2"
          backgroundColor={colors.blueAccent[800]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Números de Acidentes por Severidade
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn={{ xs: 'span 12', md: 'span 4' }}
          gridRow="span 2"
          backgroundColor={colors.blueAccent[800]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Números de Acidentes por Tipo de CNH
          </Typography>
          <Box height="200px">
            <AccidentsBarData isDashboard={true} /> {/* Ajustado para usar o novo nome do componente */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
