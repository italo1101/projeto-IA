import { Box } from "@mui/material";
import Header from "../../components/Header";
import AccidentBarDataBlack from "../../components/AccidentsBarDataBlack";

const AccidentsByCategory = () => {
  return (
    <Box m="20px">
      <Header title="Números de Acidentes por Severidade" />
      <Box height="75vh">
        <AccidentBarDataBlack />
      </Box>
    </Box>
  );
};

export default AccidentsByCategory;