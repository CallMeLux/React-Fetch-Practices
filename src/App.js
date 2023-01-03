import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';
import { style } from '@mui/system';
import styled from 'styled-components';
import './App.css';
import Search from './components/userSearch/search';

const theme = createTheme({
  palette: {
    // values for page theme
    background: {
      default: grey[900],
      paper: '101010',
      grid: grey[900]
    },
    text: {
      primary: '#fff',
      secondary: deepPurple,
    },

  },
})



function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
    <div className="App">
      <center>
        <h1>Let's Look at some Users!</h1>
      <Search />
      </center>
    </div>
    </ThemeProvider>
  );
}

export default App;
