import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartBlack from "../../components/LineChartBlack";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Lucro Gerado" />
      <Box height="75vh">
        <LineChartBlack />
      </Box>
    </Box>
  );
};

export default Line;