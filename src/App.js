import React from 'react';
import Routes from "./routes/Routes";
import {ThemeProvider} from '@material-ui/styles';
import './App.css';
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className='App'>
                <Routes/>
            </div>
        </ThemeProvider>
    );
}

export default App;
