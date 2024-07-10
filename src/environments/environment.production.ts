// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=production` then `environment.production.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { mergeDeepRight } from 'ramda';
import { environment as defaults } from './environment.defaults';
import { EnvironmentConfig } from './environment.model';

/**
 * Dev env config with local override
 */
export const environment: EnvironmentConfig = mergeDeepRight<EnvironmentConfig, Partial<EnvironmentConfig>>(defaults, {
  production: true,
});
