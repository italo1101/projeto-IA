import { Box, Button, Container, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
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
          <Header title="Painel de Controle" subtitle="Bem vindo ao Painel de Controle da Ustore" />

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
                Histórico de Vendas
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                R$59,342.32
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

        {/* Transações Recentes */}
        <Box
          gridColumn={{ xs: 'span 12', md: 'span 4' }}
          gridRow="span 2"
          backgroundColor={colors.blueAccent[800]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.grey[900]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[900]} variant="h5" fontWeight="600">
              Transações Recentes
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.grey[900]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.grey[900]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[900]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[900]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                color={colors.grey[100]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
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
            Produtos Mais Vendidos
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
            Gastos e Ganhos
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* Mapa de Vendas */}
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
            Mapa de Vendas
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;