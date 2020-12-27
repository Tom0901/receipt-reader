import "./App.css";
import Upload from "./components/Upload";
import Header from "./components/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5a24fb",
    },
    secondary: {
      main: "#d1e5fe",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card className="App">
        <Header />
        <Upload />
      </Card>
    </ThemeProvider>
  );
}

export default App;
