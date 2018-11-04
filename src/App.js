import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux'

import Home from './container/Home';
import Note from './container/Note';

class App extends Component<Props> {
  render() {
    return (
        <Router>
            <Stack key='root'>
                <Scene
                    initial={true}
                    key='home'
                    component={Home}
                    />
                <Scene
                    key='note'
                    component={Note}
                    />
            </Stack>
        </Router>
    );
  }
}

export default App;
