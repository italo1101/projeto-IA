import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChartBlack from "../../components/PieChartBlack";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Produtos Mais Vendidos" />
      <Box height="75vh">
        <PieChartBlack />
      </Box>
    </Box>
  );
};

export default Pie;