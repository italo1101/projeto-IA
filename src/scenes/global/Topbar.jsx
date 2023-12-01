import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const iconStyle = {
    color: colors.blueAccent[800],
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.blueAccent[800]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Buscar" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton sx={iconStyle}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
          <PersonTwoToneIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;