import { config } from '@gdp/react-app/lib/helpers/config';
const fetch: typeof window.fetch = require('node-fetch');

export const template = fetch(config.platform.indexUrl).then((response) => response.text());