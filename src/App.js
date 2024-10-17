import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Barchart03 from "./scenes/barchart03";
import Contacts from "./scenes/contacts";
import Heatmap from "./scenes/heatmap";
// import Form from "./scenes/form";
import Line from "./scenes/line";
import Barchart02 from "./scenes/barchart02";
// import Geography from "./scenes/geography";
import Barchart01 from "./scenes/barchart01"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/barchar01" element={<Barchart01/>}/>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/barchart03" element={<Barchart03 />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/heatmap" element={<Heatmap />} />
              <Route path="/barchart02" element={<Barchart02 />} />
              <Route path="/line" element={<Line />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;