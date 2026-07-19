import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './Components/home';
import EngagementRSVP from './Components/rsvp';
import NotFound from './Components/notfound';

import './App.css';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "Times New Roman, Times, serif"
    },
    palette: {
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#599cff',
            contrastText: '#fff',
        },
    },
});

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
        
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/rsvp" component={EngagementRSVP}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>

    </MuiThemeProvider>
), document.getElementById('root'));

registerServiceWorker();
