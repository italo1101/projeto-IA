import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChartBlack from "../../components/BarChartBlack";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Gastos e Ganhos" />
      <Box height="75vh">
        <BarChartBlack />
      </Box>
    </Box>
  );
};

export default Bar;