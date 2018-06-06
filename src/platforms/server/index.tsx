import * as React from 'react';
import Loadable from 'react-loadable';

import { createServer } from 'http';
import { renderToString } from 'react-dom/server';
import { parse } from 'url';

import { App } from '../../App';
import { template } from './template';

import { config } from '@gdp/react-app/lib/helpers/config';
import { server } from '@gdp/react-app/lib/platforms/server';
import { ServerStyleProvider } from '@gdp/react-app/lib/platforms/server/providers/ServerStyleProvider';
const PORT = parse(config.platform.ssrUrl).port!;

const createdServer = createServer((req, res) => {
    server(
        <App />,
        [
            new ServerStyleProvider()
        ],
        renderToString,
        template
    )
        .then((appHtml) => {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.write(appHtml);
            res.end();
        });
});

Loadable.preloadAll().then(() => {
    createdServer.listen(PORT, () => {
        // tslint:disable-next-line
        console.log('Server running at ' + config.platform.ssrUrl);
    });
});