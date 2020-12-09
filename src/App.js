import "./App.css";
import Upload from "./components/Upload";
import Header from "./components/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
      <div className="App">
        <Header />
        <Upload />
      </div>
    </ThemeProvider>
  );
}

export default App;
