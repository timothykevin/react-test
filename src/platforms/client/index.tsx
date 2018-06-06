import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Loadable from 'react-loadable';

import { App } from '../../App';

import { client } from '@gdp/react-app/lib/platforms/client';
import { ClientStyleProvider } from '@gdp/react-app/lib/platforms/client/providers/ClientStyleProvider';

client(
    <App />,
    [
        new ClientStyleProvider(),
    ],
    (element) => {
        Loadable.preloadReady().then(() => {
            ReactDOM.hydrate(element, document.getElementById('project-root'));
        });
    }
);